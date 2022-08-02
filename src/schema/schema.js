const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Notification {
    id: ID
    userId: String
    title: String
    content: String
    date: Int
    isRead: Boolean
  }

  type Query {
    notification: Notification
    getUserNotification(userId: String): [Notification]
  }

  type Mutation {
    addNotification(
      userId: String
      title: String
      content: String
    ): Notification
    markRead(id: ID): Notification
    markAllRead(userId: String): Notification
  }
`;

module.exports = typeDefs;
