import React from 'react';

const Artists = ({ playlist, artists }) => {
  const { name , id } = playlist 
  return(
    <>
      <h1>Artists from {name} sub</h1>
      <a href={`/playlists/${id}/artists/new`}>New Artist</a>
      <br />
      <a href={`/playlists/${id}`}>Back to {name}</a>
      { artists.map((artist) => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          <a href={`/playlists/${id}/artists/${artist.id}`}>Show</a>
          <br />
          <a href={`/playlists/${id}/artists/${artist.id}/edit`}>Edit</a>
          <br />
          <a 
            href={`/playlsits/${id}/artists/${artist.id}`}
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