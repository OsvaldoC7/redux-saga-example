import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './card'
import { actionCreators as postActions } from '../features/posts'
import { getPostsSelector } from '../sagas/rootSaga'

const List = () => {
  const dispatch = useDispatch()
  const { loading, posts } = useSelector(getPostsSelector)

  useEffect(() => {
    dispatch(postActions.requestingPosts())
  }, [dispatch])

  if (loading) {
    return (
      <div class="h-screen bg-white">
      <div class="flex justify-center items-center h-full">
        <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
      </div>
      </div>
    )
  }
  
  return (
    <div class="p-10 flex flex-wrap justify-center gap-4">
      {
        posts.map(postItem => (
          <Card {...postItem} key={postItem.id} />
        ))
      }
    </div>
  )
}

export default List