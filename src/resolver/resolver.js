const Notification = require("../model/Notification");
const { v4: uuidv4 } = require("uuid");

const resolvers = {
  Query: {
    getUserNotification: async (parent, args) => {
      return await Notification.find({ userId: args.userId });
    },
  },
  Mutation: {
    addNotification: async (parent, args) => {
      const id = uuidv4();
      const data = {
        id: id,
        userId: args.userId,
        title: args.title,
        content: args.content,
        date: parseInt(Date.now() / 1000),
        isRead: false,
      };
      const newNotification = new Notification(data);
      await newNotification.save();
      return await Notification.findOne({ id: id });
    },
    markRead: async (parent, args) => {
      await Notification.findOneAndUpdate(
        { id: args.id },
        { isRead: true },
        { new: true }
      );
      return await Notification.findOne({ id: args.id });
    },
    markAllRead: async (parent, args) => {
      await Notification.updateMany(
        { userId: args.userId },
        { isRead: true },
        { new: true }
      );
      return await Notification.findOne({ userId: args.userId });
    },
  },
};

module.exports = resolvers;
