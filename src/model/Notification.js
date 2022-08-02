const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Notification = new Schema(
  {
    id: { type: String },
    userId: { type: String },
    title: { type: String },
    content: { type: String },
    date: { type: Number },
    isRead: { type: Boolean },
    
  },
  { collection: "notification" }
);

module.exports = mongoose.model("notification", Notification);
