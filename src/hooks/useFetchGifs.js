import { useEffect, useState } from "react"
import { getGifs } from "../helper/getGifs"


export const useFetchGifs = (category) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async() => {
        const data = await getGifs(category)
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [category])
    
    return {
        data,
        loading
    }
}
