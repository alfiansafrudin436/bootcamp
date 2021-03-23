import {gql} from '@apollo/client';

const ADD_TASK = gql`
  mutation($taskExpired: date!, $taskName: String!, $userId: Int!) {
    insert_task_one(
      object: {
        taskExpired: $taskExpired
        taskName: $taskName
        taskStatus: false
        userId: $userId
      }
    ) {
      userId
      taskStatus
      taskName
      taskId
      taskExpired
    }
  }
`;
const DELETE_TASK = gql`
  mutation($taskId: Int) {
    delete_task_by_pk(taskId: $taksId) {
      taskExpired
      taskId
      taskName
      taskStatus
      userId
    }
  }
`;
const UPDATE_TASK = gql`
mutation($taskId: Int) {
  update_task_by_pk(pk_columns: {taskId: $taskId}) {
    taskStatus
  }
}
`;
export {ADD_TASK, DELETE_TASK, UPDATE_TASK};
