import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGifs(category).then((imgs) => {
            setGifs(imgs)
            setLoading(false)
        })
    }, [])

    return { gifs, loading }
}