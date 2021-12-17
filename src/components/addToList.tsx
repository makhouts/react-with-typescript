import React, { useState } from 'react'

export const AddToList = () => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='AddToList'>
            <input 
                type="text" 
                placeholder="Name" 
                className='AddToList-input' 
                value={input.name} 
                onChange={handleChange}
                name='name'   
            />
            <input type="text" 
                placeholder="Age" 
                className='AddToList-input' 
                value={input.age} 
                onChange={handleChange}
                name='age'    
            />
            <input type="text" 
                placeholder="Url" 
                className='AddToList-input' 
                value={input.url} 
                onChange={handleChange}
                name='url'   
            />
            <textarea 
                placeholder="Note" 
                className='AddToList-input' 
                value={input.note}
                onChange={handleChange}
                name='note'  
            />
            <button>Add</button>
        </div>
    )
}
