import { GraphQLServer } from "graphql-yoga";

// Type defnitions (schema)

const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!

}
`;

// Resolvers

const resolvers = {
  Query: {
    hello() {
      return "This is My First Query!!";
    },
    name() {
      return "My Name is Milan";
    },
    location(){
        return "I Stay In Bangalore"
    }
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is Up");
});
