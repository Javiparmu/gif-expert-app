import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length < 2) return 

        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input type="text" placeholder="Search a gif" value={inputValue} onChange={ onChangeInput } />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}