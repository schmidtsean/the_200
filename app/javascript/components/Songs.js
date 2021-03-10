import React from 'react'; 



const Songs = ({ artist, songs }) => {
    const { name , id } = artist
  return (
    <>
      <h1>All the Songs</h1>
      <a href={"/songs/new"}>Add Songs</a>
      <h2>{ songs.length <= 0 ? "No Courses" : "" }</h2>
      { songs.map((song) => (
      <div>
        <h3>{song.name}</h3>
        <a href={url + song.id}>Show</a>
        <br />
        <a href={url + song.id + "/edit"}>Edit</a>
        <br />
        <a
          href={url + song.id }
          data-method="delete"
          >
            Delete
          </a>
      </div>
      ))}
    </>
  )
}

export default Songs;
