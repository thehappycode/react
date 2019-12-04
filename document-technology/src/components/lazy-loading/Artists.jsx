import React from 'react';
import '../../App.css';
import artists from './Store';

export default function Artists() {
    return (
        <React.Fragment>
            <h1>MTV Base Headline Artists 2019</h1>
            {
                artists.map(artists => (
                    <div id="card-body" key={artists.id}>
                        <div className="card">
                            <h2>{artists.name}</h2>
                            <p>genre: {artists.genre}</p>
                            <p>Albums released: {artists.albums}</p>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
    );
}