import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    const category = "One Punch"

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            gifs: [],
            loading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText( category ))
    })
    test('debe mostrar los gifs luego de cargarlos', () => {

        const gifs = [
            {
                id: "ABC",
                url: "https://media1.giphy.com/media/l0HlW9kLfQj1RrtjO/giphy.gif",
                title: "One Punch"
            },
            {
                id: "DEF",
                url: "https://media1.giphy.com/media/l0HlW9kLfQj1RrtjO/giphy.gif",
                title: "Dragon Ball"
            }
        ]

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            loading: false
        })
        render(<GifGrid category={category} />)
        
        expect(screen.getAllByRole('img')).toHaveLength(2)
    })

} )