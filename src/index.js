import { GraphQLServer } from "graphql-yoga";

// Type defnitions (schema)

const typeDefs = `
type Query {
    id: ID!
    title: String!
    age: Int!
    single: Boolean!
    weight: Float
}
`;

// Resolvers

const resolvers = {
  Query: {
    id(){
        return "1001212"
    },
    title(){
        return "Milan"
    },
    age(){
        return 27
    },
    single(){
        return true
    },
    weight(){
        return null
    },

  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is Up");
});
