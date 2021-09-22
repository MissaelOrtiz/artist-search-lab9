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
    return artistObj;
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return {};
  }
};

export const getReleases = async (id) => {
  try {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, { method: 'GET' }
    );
    const json = await res.json();
    const releaseArray = json.releases.map(async (release) => {
      const releaseUrl = await getCoverArt(release.id);
      return {
        id: release.id,
        title: release.title,
        date: release.date,
        image: releaseUrl
      };});
    const resolved = await Promise.all(releaseArray);
    return resolved;
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return [];
  }
};

export const getCoverArt = async (id) => {
  try {
    const res = await fetch(`http://coverartarchive.org/release/${id}/front`, { method: 'GET' });
    const art = res.url;
    return art;
  } catch (error) {
    console.error(`An error has occured: ${error.message}`);
    return 'https://community.mp3tag.de/uploads/default/original/2X/a/acf3edeb055e7b77114f9e393d1edeeda37e50c9.png';
  }
};
