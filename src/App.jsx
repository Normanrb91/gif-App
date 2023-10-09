import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function App() {
  const [category, setcategory] = useState('')

  const changeCategory = value => {
    if (value === category) return
    setcategory(value)
  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={value => changeCategory(value)} />
      <GifGrid category={category} />
    </>
  )
}

export default App
