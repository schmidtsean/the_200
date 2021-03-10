import React from 'react';


const SongNew = ({ artist, song}) => {
  const { id } = artist
  const { name, body, errors } = song
  const defaultName = name ? name : ""
  const defaultBody = body ? body : ""
  return(
    <>
      <h1>New Song</h1>
      { errors && errors }
      <form action={`/artists/${id}/songs`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="song[name]"
        />
        <textarea
          placeholder="body"
          defaultValue={defaultBody}
          name="song[body]"
        />
        <button type="submit">Add Song</button>
      </form>
    </>
  )
}

export default SongNew;