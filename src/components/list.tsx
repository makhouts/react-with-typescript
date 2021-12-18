import React from 'react'

export interface IProps {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string
    }[]
}

export const List: React.FC<IProps> = ({ people }) => {

    const renderlist = (): JSX.Element[] => {
       return people.map(person => (
               <li className='List'>
                <div className='List-header'>
                    <img className='List-img' src={person.url} /> 
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.note}</p>
               </li>
        ))
    };

    return (
        <ul>
            {renderlist()}
        </ul>
    )
}
