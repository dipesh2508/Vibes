import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi from "@/lib/spotify"
import { LOGIN_URL } from "@/lib/spotify";

async function refreshAccessToken(token: any) {

  /**
   * Sets the access token and refresh token for the Spotify API using the provided token object.
   * Then, refreshes the access token and updates the token object with the refreshed token.
   * @param {object} token - The token object containing the access token and refresh token.
   * @returns {object} - The updated token object with the refreshed access token and expiration time.
   * @throws {Error} - If there is an error refreshing the access token.
   */
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("refreshed token is", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: refreshedToken.expires_in * 1000 + Date.now(),
      refreshToken: refreshedToken.refresh_token || token.refreshToken,
    };
    
  /**
   * Catches an error and logs it to the console. Then returns a modified token object with an error property set to "RefreshAccessTokenError".
   * @param {any} error - The error object to be logged.
   * @returns {Object} - The modified token object with an error property.
   */

  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const authOptions = {
  // Configure one or more authentication providers
  /**
   * Creates a list of provider objects for authentication.
   * @returns An array of provider objects.
   */
  providers: [
    SpotifyProvider({
      clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callback: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: any;
      account: any;
      user: any;
    }) {
      /**
       * Checks if both an account and user object are present. If so, it returns a new object
       * with updated token values.
       * @param {object} account - The account object.
       * @param {object} user - The user object.
       * @returns {object} - An object with updated token values.
       */
      if (account && user) {
        return {
          ...token,
          accessToken: account.accessToken,
          refreshToken: account.refreshToken,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at + 1000,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        console.log("token is valid");
        return token;
      }

      console.log("token is invalid");
      return await refreshAccessToken(token);
    },

    /**
     * Updates the session object with the provided access token, refresh token, and username.
     * @param {Object} session - The session object to update.
     * @param {Object} token - The token object containing the access token, refresh token, and username.
     * @param {string} token.accessToken - The access token to assign to the session.
     * @param {string} token.refreshToken - The refresh token to assign to the session.
     * @param {string} token.username - The username to assign to the session.
     * @returns {Object} The updated session object.
     */
    async session({ session, token }: { session: any; token: any }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
};

export default NextAuth(authOptions);