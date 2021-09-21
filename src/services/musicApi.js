export const getArtist = async (artistName) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25`
    );
    const json = await res.json();

    return json.artists.map(artist => ({
      id: artist.id,
      type: artist.type,
      name: artist.name,
      country: artist.country
    }));
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return [];
  }
};
