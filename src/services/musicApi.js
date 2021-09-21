/* eslint-disable max-len */
export const getArtist = async (artistName, page) => {
  try {
    const offset = (page - 1) * 26;
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&limit=25&offset=${offset}`, { method: 'GET' }
    );
    const json = await res.json();
    const artistsArray = json.artists.map((artist) => ({
      id: artist.id,
      type: artist.type,
      name: artist.name,
      country: artist.country,
      begin: artist['life-span'].begin,
      end: artist['life-span'].end
    }));
    return artistsArray;
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return [];
  }
};

export const getArtistById = async (id) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/artist/${id}?fmt=json`, { method: 'GET' }
    );
    const artist = await res.json();
    const artistObj = {
      id: artist.id,
      type: artist.type,
      name: artist.name,
      country: artist.country,
      begin: artist['life-span'].begin,
      end: artist['life-span'].end
    };
    console.log('HERE', artistObj);
    return artistObj;
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return [];
  }
};
