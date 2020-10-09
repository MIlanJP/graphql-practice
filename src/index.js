import { GraphQLServer } from "graphql-yoga";

const users=[{
    id:"100",
    name:"Milan",
    email:"milan@example.com",
    age:25
},
{
    id:"101",
    name:"Rakesh",
    email:"Rakesh@example.com",
    age:27
},{
    id:"102",
    name:"Michal",
    email:"Michal@example.com",
    age:28
}
]

// Type defnitions (schema)

const typeDefs = `
type Query {
me: User!
film: Movie!
users:[User!]
posts:Posts!
listofBooks:[String!]!
greeting(name:String,location:String): String!
add(firstNumber:Int!,secondNumber:Int!):Int!
subtract(firstNumber:Int!,secondNumber:Int!):Int!
}

type Movie{
    title: String!
    releaseYear: Int!
    budget: Int!
}
type Posts{
    title: String!
    comments: String!
    published: Boolean!
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
      users(){
          return users
      },
    me() {
      return {
        id: "123",
        name: "Milan",
        email: "milan@gmail.com",
        age: 25,
      };
    },
    film() {
      return {
        title: "Don",
        releaseYear: 1980,
        budget: 50,
      };
    },
    posts() {
      return {
        title: "My First Post",
        comments: "Hey Nice Post",
        published: true,
      };
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.location) {
        return "Hello " + args.name + " you stay in " + args.location;
      } else {
        return "Hello";
      }
    },
    add(parent, args, ctx, info) {
      return args.firstNumber + args.secondNumber;
    },
    subtract(parent, args, ctx, info) {
      return args.firstNumber - args.secondNumber;
    },
    listofBooks() {
        return ["Art of Living","Online Writer","The Dark Knight"]
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
