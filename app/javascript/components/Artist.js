import React from 'react';


const Artist = ({ playlist, artist }) => {
  const { name, id } = playlist
  
  
  
  return(
    <>
      <h1>Artist: {name} </h1>
      
      <p>
         id: {id}
      </p>
      <a href={`/playlists/${id}/artists/`}>Back</a>
      <br />
      <a href={`/artists/${artist.id}/songs`}>Songs</a>
      <br />
    </>
  )
}

export default Artist;