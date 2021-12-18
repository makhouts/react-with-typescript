import React, { useState } from 'react';
import { IProps as Props } from './list';

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.url) {
            return;
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])
    };

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
            <button className='AddToList-btn' onClick={handleClick}>Add</button>
        </div>
    )
}
