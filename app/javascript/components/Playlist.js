import React from 'react';

const Playlist = ({ playlist }) => {
  const { id, name, created_at } = playlist;
 
  return (
    <>
      <h1>Playlist: {name}</h1>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
      <br />
      <a href={`/playlists/${id}/artists`}>Artists</a>
    </>
  )
}

export default Playlist;