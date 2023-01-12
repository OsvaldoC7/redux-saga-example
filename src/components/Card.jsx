import React from 'react'

const Card = ({ title, body }) => {
  return (
    <div className="sm:w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
    </div>
  )
}

export default Card