import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {data.map(gif => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </div>
    </>
  )
}