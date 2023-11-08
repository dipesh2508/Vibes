import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import spotifyApi from "@/lib/spotify";

function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      //If refresh token attempt failed, redirect to sign in page
      if ((session as any).error === "RefreshAccessTokenError") {
        // refresh token
        signIn();
      }

      spotifyApi.setAccessToken(
        (session.user as { accessToken: string }).accessToken
      );
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;