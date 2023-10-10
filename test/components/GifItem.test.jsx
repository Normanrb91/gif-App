import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('pruebas en <GifItem />', () => {
  const title = 'betis'
  const url = 'https://betis.com/plantilla.jpg'

  test('debe hacer match con snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar la imagen con la URL y ALT indicado', () => {
    render(<GifItem title={title} url={url} />)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
