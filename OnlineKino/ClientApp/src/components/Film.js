import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Film() {
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`api/films/${id}`)
            .then(response => response.json())
            .then(data => {
                setFilm(data);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {
                loading
                    ? <p><em>Loading...</em></p>
                    : <h1 id="tableLabel">{film.name}</h1>
            }
        </div>
    );
}