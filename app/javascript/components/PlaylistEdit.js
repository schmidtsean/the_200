import React from 'react';

const PlaylistEdit = ({ playlist }) => {
  const { name, id } = playlist
  const defaultTitle = name ? name : "";
  return(
    <>
      <h1>Edit Playlist</h1>
      <form action={`/playlists/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultTitle}
          name="playlist[name]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default PlaylistEdit;