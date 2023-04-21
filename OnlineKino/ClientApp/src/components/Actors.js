import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Actors() {

    const [actors, setActors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('api/actors')
            .then(response => response.json())
            .then(data => {
                setActors(data);
                setLoading(false);
            });
    }, []);
    return (
        <>
                    <h1 id="tableLabel">Actors</h1>
        <p><Link to={'/actors/create'}>Create new</Link></p>
            {loading
                ?
                <p><em>Loading...</em></p>
                :
                <>
                    <table className="table table-striped" aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                {/* <th>Films</th> */}
                                <th>Date Of Birth</th>
                                <th>Country</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actors.map(actor =>
                                <tr key={actor.id}>
                                    <td>
                                        {actor.name}
                                    </td>
                                    <td>{actor.surname}</td>
                                    <td>{moment(actor.dateOfBirth).format('DD.MM.YYYY')}</td>
                                    <td>{actor.country}</td>
                                    <td><button className='btn btn-danger' onClick={event => {
                                        fetch(`api/actors/${actor.id}`, {
                                            method: 'delete'
                                        }).then(response => {
                                            if (response.ok) {
                                                setActors(actors.filter(a => a.id != actor.id));
                                            }
                                        });
                                    }}>Delete</button><button className='btn btn-info'>Edit</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            }
        </>
    );
}
