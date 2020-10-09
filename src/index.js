import { GraphQLServer } from "graphql-yoga";

// Type defnitions (schema)

const typeDefs = `
type Query {
me: User!
}

type User{
    id: ID!
    name: String!
    email: String!
    age: Int
}

`;

// Resolvers

const resolvers = {
  Query: {
    me(){
        return{
            id:"123",
            name:"Milan",
            email:"milan@gmail.com",
            age:25

        }
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
