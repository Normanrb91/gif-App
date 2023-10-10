import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('pruebas en el hook useForm', () => { 
    const initialform = {category: 'Betis'}

    test('debe de retornar el estado inicial', () => { 
        const {result} = renderHook( () => useForm(initialform))
        expect(result.current).toEqual([
            { category: initialform.category },
            expect.any(Function),
            expect.any(Function)
          ])
     })

     test('debe de cambiar la categoria del formulario', () => { 
        const newValue = 'goku'
        const {result} = renderHook( () => useForm(initialform))
        const [ , handleInputChange ] = result.current

        act(()=> {
            handleInputChange({target : { name: 'category', value: newValue } })
        })
    
        expect(result.current[0].category).toBe(newValue)
     })


     test('debe de realizar el reset formulario', () => { 
        const newValue = 'goku'
        const {result} = renderHook( () => useForm(initialform))
        const [ , handleInputChange, reset ] = result.current

        act(()=> {
            handleInputChange({target : { name: 'category', value: newValue } })
            reset()
        })
    
        expect(result.current[0].category).toBe(initialform.category)
     })

})