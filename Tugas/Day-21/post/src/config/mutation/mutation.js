import {gql} from '@apollo/client';
const CREATE_POST = gql`
mutation ($title:String!, $content:String!) {
    createPost(
      title: "$title"
      content: "$content"
    ) {
      id
      title
      content
      createdAt
    }
  }
`;
const REGISTER = gql`
  mutation ($email:String!, $name:String!, $password:String!) {
    register(
      input: {email: $email, name: $name, password: $password}
    ) {
      email
      name
      id
    }
  }
`;
const LOGIN = gql`
  mutation ($email:String!, $password:String!) {
    login(input: {email: $email, password: $password}) {
      token
      id
      name
      email
    }
  }
`;

export {CREATE_POST, REGISTER, LOGIN};
