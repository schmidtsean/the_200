import React from 'react'; 

const url = "http://localhost:3000/playlists/";

const Playlists = ({ playlists }) => {
  return (
    <>
      <h1>All the Playlists</h1>
      <a href={"/playlists/new"}>Add Playlist</a>
      { playlists.map( (playlist) =>
      <div>
        <h3>{playlist.name}</h3>
        <a href={url + playlist.id}>Show</a>
        <br />
        <a href={url + playlist.id + "/edit"}>Edit</a>
        <br />
        <a
          href={url + playlist.id }
          data-method="delete"
          >
            Delete
          </a>
      </div>
      )}
    </>
  )
}

export default Playlists;
