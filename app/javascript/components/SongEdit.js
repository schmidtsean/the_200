import React from 'react';

const SongEdit = ({ artist, song }) => {
  const { name , id } = artist
  const defaultName = name ? name : "";
  const defaultBody = song.body ? song.body : "";
  return(
    <>
        <h1> Edit Song Info Below: </h1>
        <form action={`/artists/${id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        Name: <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultName}
          name="song[name]"
        /> <br />
        Body: <input
          placeholder="Body"
          required
          type="text"
          defaultValue={defaultBody}
          name="artist[body]"
        />
        <button type="Submit">Update</button>
        </form>
    </>
  )
}

export default SongEdit;