import React from 'react';

const ArtistEdit = ({ playlist, artist }) => {
  const { name , id } = playlist 
  const defaultName = name ? name : "";
  const defaultBody = artist.body ? artist.body : "";
  return(
    <>
        <h1> Edit Artist Info Below: </h1>
        <form action={`/playlists/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        Name: <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultName}
          name="artist[name]"
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

export default ArtistEdit;