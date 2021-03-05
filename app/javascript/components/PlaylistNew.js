import React from 'react';

const PlaylistNew = ({ playlist }) => {
  const {name} = playlist
  const defaultTitle = name ? name : ""
  return(
    <>
      <h1>New Playlist</h1>
      <form action="/playlists" method="post">
        <input
        placeholder="Name"
        type="text"
        defaultValue={defaultTitle}
        name="playlist[name]"
        />
        <button type="submit">Add</button>
      </form>
      </>
  )
}

export default PlaylistNew;