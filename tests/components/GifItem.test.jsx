import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem />', () => {
    const title = 'One Punch'
    const url = 'https://localhost/algo.jpg'
    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
    test('debe de tener un párrafo con el title', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
    test('debe de tener la imagen igual al url y alt de los props', () => {
        render(<GifItem title={title} url={url} />)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })
})