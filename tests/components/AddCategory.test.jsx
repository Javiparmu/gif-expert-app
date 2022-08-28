import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'One Punch' } })

        expect(input.value).toBe('One Punch')

    })
    test('debe llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: 'One Punch' } })
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith('One Punch')

    })
    test('no debe llamar onNewCategory si el input no tiene un valor', () => {
            
            const onNewCategory = jest.fn()
    
            render(<AddCategory onNewCategory={onNewCategory} />)
            const input = screen.getByRole('textbox')
            const form = screen.getByRole('form')
    
            fireEvent.submit(form)
    
            expect(input.value).toBe('')
    
            expect(onNewCategory).toHaveBeenCalledTimes(0)
    
        }
    )
})