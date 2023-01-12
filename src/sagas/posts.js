import { call, put } from 'redux-saga/effects'
import { getPostsAPI } from '../api/posts'
import { actionTypes as actionTypesPosts } from '../features/posts'

export default function* getPosts() {
  try {
    const result = yield call(getPostsAPI)
    yield put({ type: actionTypesPosts.GET_POSTS_SUCCESS, data: result })
  } catch (error) {
    yield put({ type: actionTypesPosts.GET_POSTS_FAILURE })
  }
}