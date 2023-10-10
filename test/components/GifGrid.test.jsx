import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en <GifGrid />', () => {
  const category = 'Betis'

  test('debe de mostrar el loding inicial', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByText('Cargando...'))
    expect(screen.getAllByText(category))
  })

  test('debe de mostrar items cuando se cargan los gifs mediande el useGetGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'plantilla',
        url: 'https://betis.com/plantilla.jpg'
      },
      {
        id: '1123',
        title: 'Joaquin',
        url: 'https://taki.com/joquinfirma.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })

  test('debe hacer match con snapshot', () => {
    const { container } = render(<GifGrid category={category} />)
    expect(container).toMatchSnapshot()
  })
})
