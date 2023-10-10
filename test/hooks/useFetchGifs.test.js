import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => { 
    test('debe de retoenar el estado inicial', () => { 
        const {result} = renderHook( () => useFetchGifs('Betis'))
        const {data, loading} = result.current

        expect(data.length).toBe(0)
        expect(loading).toBeTruthy()
     })

     test('debe de retornar un arreglo y el loading en false', async() => { 
        const {result} = renderHook( () => useFetchGifs('Betis'))

        await waitFor(
            () => expect(result.current.data.length).toBeGreaterThan(0),
        )

        const {data, loading} = result.current

        expect(data.length).toBeGreaterThan(0)
        expect(loading).toBeFalsy()
        
     }) 
})