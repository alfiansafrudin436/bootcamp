import {gql} from '@apollo/client';
const QUERY_GET_POST = gql`
  query getPost {
    getAllPosts {
      id
      title
      content
      author {
        name
        email
      }
    }
  }
`;


export {
  QUERY_GET_POST
};

export default {};
