export const NAME = 'posts'

const GET_POSTS_SUCCESS = '[posts]/GET_POSTS_SUCCESS'
const GET_POSTS_FAILURE = '[posts]/GET_POSTS_FAILURE'
const REQUESTING_POSTS = '[posts]/REQUESTING_POSTS'

const intialState = {
  loading: false,
  posts: [],
}

export const actionTypes = {
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  REQUESTING_POSTS,
}

function getPostsSuccess() {
  return { type: GET_POSTS_SUCCESS }
}

function getPostsFailure() {
  return { type: GET_POSTS_FAILURE }
}

function requestingPosts() {
  return { type: REQUESTING_POSTS }
}

export const actionCreators = {
  getPostsFailure,
  getPostsSuccess,
  requestingPosts
}

export default function reducer(state = intialState, action = {}){
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.data
      }
    case actionTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case actionTypes.REQUESTING_POSTS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export const posts = (state) => state.posts