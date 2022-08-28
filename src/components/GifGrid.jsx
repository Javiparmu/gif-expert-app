import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
import PropTypes from "prop-types"

export const GifGrid = ({ category }) => {
    const { gifs, loading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>
            {
                loading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    gifs.map(gif =>
                        <GifItem key={gif.id} {...gif} />
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
