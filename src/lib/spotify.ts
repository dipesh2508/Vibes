import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-library-read",
  "playlist-read-collaborative",
  "playlist-read-public",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "streaming",
  "user-follow-read",
  "user-follow-modify",
].join(",");

const params = {
  scopes: scopes,
};

/**
 * Creates a query parameter string from the given parameters object.
 * @param {Object} params - The parameters object to convert to a query parameter string.
 * @returns {string} - The query parameter string.
 */
const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
export { LOGIN_URL };
