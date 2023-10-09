import { useForm } from '../hooks/useForm'

export const AddCategory = ({ onNewCategory }) => {
  const [values, handleInputChange, reset] = useForm({ category: '' })

  const handleSubmit = e => {
    e.preventDefault()
    if (values.category.trim().length <= 1) return

    onNewCategory(values.category)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Buscar Gifs"
        name="category"
        type="text"
        value={values.category}
        onChange={handleInputChange}
      />
    </form>
  )
}
