import { gql } from "apollo-boost";

export const USER_INFO = gql`
  query QueryUserInfo($username: String!){
  user(login: $username) {
    name
    login
    company
    avatarUrl
    pullRequests(last: 5, states:[MERGED, OPEN, CLOSED], orderBy:{field: CREATED_AT, direction:ASC}){
      edges{
        node {
          state
          title
          id
          url
          changedFiles
          comments(last: 5){
            edges{
              node{
                id
                author{
                  login
                }
                body
              }
            }
          }
        }
      }
    }
     repositories(last: 5) {
       nodes {
          name
          createdAt
          description
          url
          id
          owner{
            avatarUrl
            login
          }
       }
     }
   }
}
`;

export const USER_SEARCH = gql`
query QueryUsers($username: String!) {
  search(query: $username, type: USER, first: 20) {
    edges{
      node{
      ... on User {
            login
            id
            name
            bio
            avatarUrl
            company
          }
        __typename
      }
    }
   }
}
`;
