import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Student {
    name: String
    lastName: String
    age: Int
    gender: String
    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    students: [Student],
    countst: Int,
    findStudentname(name: String): Student,
    findStudentlastName(lastName: String): Student,
    findStudentage(age: Int): Student,
    findStudentgender(gender: String): Student,
  }
`;
const students = [
    {
        name: 'Raul',
        lastName: 'Chopin',
        age: 27,
        gender: 'M'
    },
    {
        name: 'Kendal',
        lastName: 'Hoffman',
        age: 31,
        gender: 'M'
    },
    {
        name: 'Juana',
        lastName: 'Smith',
        age: 28,
        gender: 'F'
    },
    {
        name: 'Mitch',
        lastName: 'Jakson',
        age: 35
    },
    {
        name: 'Hector',
        lastName: 'Hugh',
    },
    {
        name: 'Maria',
        lastName: 'Jhonson',
        age: 31,
        gender: 'F'
    },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// Root se refiere a lo principal = Root->Query->findStudent en la ruta del apollo server como ejemplo
// Argumentos son referidos a que va a necesitar argumentos para funcionar
// MOCS hacer pruebas al backend
const resolvers = {
    Query: {
        students: () => students,
        countst: () => students.length,
        findStudentname: (root, args) => {
            const { name } = args;
            return students.find(student => student.name === name);
        },
        findStudentlastName: (root, args) => {
            const { lastName } = args;
            return students.find(student => student.lastName === lastName);
        },
        findStudentage: (root, args) => {
            const { age } = args;
            return students.find(student => student.age === age);
        },
        findStudentgender: (root, args) => {
            const { gender } = args;
            return students.find(student => student.gender === gender);
        },
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
