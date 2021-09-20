export const getArtist = async (artistName) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`
    );
    const artists = await res.json();

    return artists.map(artist => ({
      id: artist.id,
      
    }));
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return [];
  }
};
