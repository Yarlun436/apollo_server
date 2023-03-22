import {gql} from '@apollo/client'

export const query = gql`Query {
    students{
        age
        gender
        lastName
        name
    }
}`;