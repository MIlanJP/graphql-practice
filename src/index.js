import {GraphQLServer} from 'graphql-yoga';

// Type defnitions (schema)

const typeDefs=`
type Query {
    hello: String!

}
`

// Resolvers

const resolvers={
    Query:{
        hello(){
            return "This is My First Query!!"
        }
    }
}

const server =new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(()=>{
    console.log("The server is Up")
})
