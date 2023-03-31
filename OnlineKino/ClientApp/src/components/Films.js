import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('api/films')
      .then(response => response.json())
      .then(data => {
        setFilms(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 id="tableLabel">Films</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {loading
        ? <p><em>Loading...</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              <th>Rating</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {films.map(film =>
              <tr key={film.id}>
                <td>
                  <Link className="text-dark" to={`/films/${film.id}`}>{film.name}</Link>
                </td>
                <td>{film.description}</td>
                <td>{moment(film.date).format('DD.MM.YYYY')}</td>
                <td>{film.rating}</td>
                <td>{film.country}</td>
              </tr>
            )}
          </tbody>
        </table>}
    </div>
  );
}
