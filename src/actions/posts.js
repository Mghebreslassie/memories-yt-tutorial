import { FETCH_ALL, CREATE, DELETE, UDPATE } from "../constants/actionTypes"
import * as api from "../api/index"

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_ALL, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UDPATE, payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: UDPATE, payload: data })
  } catch (error) {
    console.log(error)
  }
}