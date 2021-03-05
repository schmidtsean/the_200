import React from 'react';

const Artists = ({ playlist, artists }) => {
  const { title, id } = playlist
  return(
    <>
      <h1>Artists from {title} sub</h1>
      <a href={`/playlists/${id}/topics/new`}>New Artist</a>
      <br />
      <a href={`/playlists/${id}`}>Back to {title}</a>
      { Artists.map((artist) => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <a href={`/playlists/${id}/artists/${artist.id}`}>Show</a>
          <br />
          <a href={`/playlists/${id}/artists/${artist.id}/edit`}>Edit</a>
          <br />
          <a 
            href={`/playlists/${id}/artists/${artist.id}`}
            data-method="delete"
          >
            Delete
          </a>
        </div>
      ))}
    </>
  )
}

export default Artists;