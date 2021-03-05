import React from 'react';

const ArtistNew = ({ playlist, artist}) => {
  const { id } = playlist
  const { name, body, errors } = artist
  const defaultName = name ? name : ""
  const defaultBody = body ? body : ""
  return(
    <>
      <h1>New Artist</h1>
      { errors && errors }
      <form action={`/playlists/${id}/artists`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="artist[name]"
        />
        <textarea
          placeholder="body"
          defaultValue={defaultBody}
          name="artist[body]"
        />
        <button type="submit">Add Artist</button>
      </form>
    </>
  )
}

export default ArtistNew;