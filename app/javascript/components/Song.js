import React from 'react';
const url = "http://localhost:3000/songs/";

const Songs = ({ artist, song }) => {
  const { name , id } = artist
 
  return (
    <>
      <h1>Song: {name}</h1>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
      <br />
      <a href={/artists/${id}/songs/${song.id}>Songs</a>
    </>
  )
}

export default Song;