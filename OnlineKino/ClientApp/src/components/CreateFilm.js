import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateFilm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRaiting] = useState(0);
    const [country, setCountry] = useState('');
    const navigate = useNavigate(); 
    return (
        <>
            <h1>Create film</h1>
            <form onSubmit={event => {
                    event.preventDefault();
                    const data = {name, description, date, rating, country};
                    fetch('api/films', {
                        method: 'post',
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    navigate("/films")
                }}>
                Name: <input type='text' value={name} onChange={event => setName(event.target.value)} /><br />
                Description: <input type="text" value={description} onChange={event => setDescription(event.target.value)} /><br />
                Date: <input type= "date" value={date} onChange={event => setDate(event.target.value)} /><br />
                Rating: <input type= "number" value={rating} onChange={event => setRaiting(event.target.value)} /><br/>
                Country: <input type= "text" value={country} onChange={event => setCountry(event.target.value)} /><br/>
                <button className='btn btn-primary' type='submit'>Create</button>            
            </form>
        </>
    );
}