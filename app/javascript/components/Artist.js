import React from 'react';

const Artist = ({ playlist, artist }) => {
  const { name, id } = playlist
  return(
    <>
      <h1>Artists from {name} sub</h1>
      <a href={`/playlists/${id}/artists/new`}>New Artist</a>
      <br />
      <a href={`/artists/${artist.id}/songs`}>Show</a>
      <a href={`/playlists/${id}`}>Back to {name}</a>
      
    </>
  )
}

export default Artist;