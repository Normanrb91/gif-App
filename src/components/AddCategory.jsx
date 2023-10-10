import PropTypes from 'prop-types'
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
    <form onSubmit={handleSubmit} aria-label="form">
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
