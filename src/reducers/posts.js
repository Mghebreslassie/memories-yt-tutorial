import {
  FETCH_ALL,
  CREATE,
  DELETE,
  UDPATE,
  LIKE,
} from "../constants/actionTypes"
const reducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [...posts, action.payload]
    case LIKE:
    case UDPATE:
      return posts.map((post) =>
        post.id === action.payload._id ? action.payload : post
      )
    case DELETE:
      return posts.filter((post) => post.id !== action.payload)
    default:
      return posts
  }
}

export default reducer
