import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Films() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [filmToEdit, setFilmToEdit] = useState(null);

    useEffect(() => {
        fetch('api/films')
            .then(response => response.json())
            .then(data => {
                setFilms(data);
                setLoading(false);
            });
    }, []);

    const getByTitle = () => {
        fetch(`api/films?title=${title}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFilms(data);
                setLoading(false);
            });
    };



    return (
        <div>
            <h1 id="tableLabel">Films</h1>
            <p><Link to={'/films/create'}>Create new</Link></p>
            <p>This component demonstrates fetching data from the server.</p>
            {loading
                ? <p><em>Loading...</em></p>
                : <>
                    <form onSubmit={event => {
                        event.preventDefault();
                        getByTitle();
                    }}>
                        <div className="input-group mb-3">
                            <input name="title" type="text" className="form-control" value={title} onChange={event => setTitle(event.target.value)} />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </div>
                    </form>
                    <table className="table table-striped" aria-labelledby="tableLabel">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Rating</th>
                                <th>Country</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map(film =>
                                <tr key={film.id}>
                                    {filmToEdit && filmToEdit.id === film.id ?
                                    <>
                                    <td><input type="text" value={filmToEdit.name} onChange={event => setFilmToEdit({...filmToEdit, name: event.target.value})}/></td>
                                    <td><input type="text" value={filmToEdit.description} onChange={event => setFilmToEdit({...filmToEdit, description: event.target.value})}/></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    </> :
                                    <>
                                    <td>{film.name}</td>
                                    <td>{film.description}</td>
                                    <td>{moment(film.date).format('DD.MM.YYYY')}</td>
                                    <td>{film.rating}</td>
                                    <td>{film.country}</td>
                                    </>}
                                    
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={event => {
                                                fetch(`api/films/${film.id}`, {
                                                    method: 'delete'
                                                }).then(response => {
                                                    if (response.ok) {
                                                        setFilms(films.filter(f => f.id != film.id));
                                                    }
                                                });
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button 
                                        className='btn btn-info'
                                        onClick={event => {
                                            setFilmToEdit({...film})
                                        }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>}
        </div>
    );
}
