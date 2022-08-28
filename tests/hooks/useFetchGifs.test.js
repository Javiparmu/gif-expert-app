import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el state inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { gifs, loading } = result.current

        expect(gifs.length).toBe(0)
        expect(loading).toBeTruthy()

    })
    test('Debe retornar un array de gifs y loading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'))
        
        await waitFor(() => {
            expect(result.current.gifs.length).toBeGreaterThan(0)
        })

        const { gifs, loading } = result.current

        expect(gifs.length).toBeGreaterThan(0)
        expect(loading).toBeFalsy()

    })
})