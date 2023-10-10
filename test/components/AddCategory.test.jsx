import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('pruebas en <AddCategory /> ', () => {
  test('debe hacer match con snapshot', () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de cambiar el valor del input', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'Betis' } })
    expect(input.value).toBe('Betis')
  })

  test('debe de llamar onNewCategory si el input tiene valor', () => {
    const inputValue = 'Betis'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    expect(input.value).toBe('')
  })

  test('no debe de llamar onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
