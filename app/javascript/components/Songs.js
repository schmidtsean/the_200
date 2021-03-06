import React from 'react'; 



const Songs = ({ artist, songs }) => {
    const { name, id } = artist
   
    
  return (
    <>
      <h1>Songs</h1>
      <a href={`/artists/${id}/songs/new`}>Add Songs</a>
      { songs.map((song) => (
      <div>
        <h3>{song.name}</h3>
        <a href={`/artists/${id}/songs/${song.id}`}>Show</a> 
        <br />
        <a href={`/artists/${id}/songs/${song.id}/edit`}>Edit</a>
        <br />
        <a href={`/artists/${id}/songs/${song.id}`}
          data-method="delete"
          >
            Delete
          </a>
          <br/>
          <a href={`/`}>Home</a>
        <br />
      </div>
      ))}
    </>
  )
}

export default Songs;
