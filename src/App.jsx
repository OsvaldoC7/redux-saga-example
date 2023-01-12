import { useEffect, useState } from 'react'
import List from './components/List'

function App() {
  return (
    <div>
      <h1 className='text-center text-xl font-bold pt-8'>Posts Recientes</h1>
      <List />
    </div>
  )
}

export default App
