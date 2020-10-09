import { GraphQLServer } from "graphql-yoga";

// Type defnitions (schema)

const typeDefs = `
type Query {
me: User!
film: Movie!
posts:Posts!
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
    me(){
        return{
            id:"123",
            name:"Milan",
            email:"milan@gmail.com",
            age:25

        }
    },
    film(){
        return {
            title: "Don",
            releaseYear: 1980,
            budget:50
        }
    },
    posts(){
        return {
            title:'My First Post',
            comments:"Hey Nice Post",
            published:true
        }
    },
    greeting(parent,args,ctx,info){
        if(args.name&& args.location){
            return "Hello "+ args.name+ " you stay in " + args.location
        }else{
            return "Hello"
        }
        },
        add(parent,args,ctx,info){
            return args.firstNumber+args.secondNumber
        },
        subtract(parent,args,ctx,info){
            return args.firstNumber-args.secondNumber
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
