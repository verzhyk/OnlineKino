import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateActor() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    return (
        <>
            <h1>Create Actor</h1>
            <form onSubmit={event => {
                event.preventDefault();
                const data = { name, surname, dateOfBirth, country };
                fetch('api/actors', {
                    method: 'post',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                navigate("/actors")
            }}>
                <div class="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" id='name' className="form-control" value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="surname" className="form-label">Surname</label>
                    <input type="text" id='name' className="form-control" value={surname} onChange={event => setSurname(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="dateOfBirth" className="form-label">DateOfBirth</label>
                    <input type="date" id='name' className="form-control" value={dateOfBirth} onChange={event => setDateOfBirth(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="country" className="form-label">Country</label>
                    <input type="text" id='name' className="form-control" value={country} onChange={event => setCountry(event.target.value)} />
                </div>
                <button className='btn btn-primary' type='submit'>Create</button>
            </form>

        </>);
}