import React from 'react';

const Song = ({ artist, songs }) => {
  const { id, name, created_at } = song;
 
  return (
    <>
      <h1>Song: {name}</h1>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href="/">back</a>
      <br />
      <a href={`/artists/${id}/songs`}>Songs</a>
    </>
  )
}

export default Song;