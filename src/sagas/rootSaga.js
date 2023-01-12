import { takeEvery, take, select, fork } from 'redux-saga/effects'
import { actionTypes as postsActions } from '../features/posts'
import getPosts from './posts'

export const getPostsSelector = (state) => state.posts

function* watchAndLog() {
  while (true) {
    const action = yield take("*");
    const state = yield select();
  }
}

export default function* rootSaga() {
  yield [
    yield takeEvery(postsActions.REQUESTING_POSTS, getPosts),
    yield watchAndLog(),
  ]
  
}