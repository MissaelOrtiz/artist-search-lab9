# Artist Search Lab

## APIs

* [Music Brainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)
* [Lyrics](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search)

## Requirements

* Create a search view to search for artists by name
  * Search should display a list of matching artists
  * Use `http://musicbrainz.org/ws/2/artist?query=<SEARCH>&fmt=json&limit=25`
  * Allow paging through artists
  * BONUS: As you type into the input box update a `searchTerm`query string.
    Navigating directly to a URL with a `searchTerm` query string pre-fills
    the search form.

* Create an artist view which list all releases by an artist
  * Use `http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json`
  * Get cover art from `http://coverartarchive.org/release/<RELEASE_ID>/front`
  * Only some releases have cover art. Display a placeholder if no cover art.
  * Allow paging through releases
  * Bonus: Make the page part of a query string

* Create a release view which displays a list of recordings for a release
  * Use `http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json`
  
* Create a song view which displays the lyrics of a song
  * Use `https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>` to get lyrics

## Testing

* behavior testing

## Rubric

* fetches: 2 points
* Components / state management 8 points
* Router 6 points
* Tests 2 points
* syntax/Clean code 2 points


# PLAN
*Service
-musicApi (does the fetch)
*hooks
-overall list useEvent thing
-detail page useEvent thing
*components
-List
-List item
-Detail
-Search bar