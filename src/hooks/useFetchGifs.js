import { useEffect, useState } from "react"
import { getGifs } from "../helper/getGifs"


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading : true
    })

    useEffect(() => {
        getGifs(category)
        .then(gifs => {
            setState({
                data: gifs,
                loading: false
            })
        })
        .catch(() => {
            setState({
                ...data,
                loading: false
            })
        })

    }, [category])
    
    return state
}
