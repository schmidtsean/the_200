import React from 'react';


const Song = ({ artist, song }) => {
  const { name , id } = artist
 
  return (
    <>
      <h1>Song: {song.name}</h1>
      <p>
         id: {song.id}
         <br />
         <br />           
         Body: {song.body}
      </p>
      <a href={`/artists/${id}/songs/`}>Back</a>
      <br />
     
    </>
  )
}

export default Song;