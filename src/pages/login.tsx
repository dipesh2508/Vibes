import { getProviders, signIn, ClientSafeProvider } from "next-auth/react";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Image from "next/image";
import vibes from "@/assets/vibes.png";

interface Props {
  providers: Record<string, ClientSafeProvider> | null;
}

const login = ({ providers }: Props) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen w-full justify-center space-y-8">
      <Image src={vibes} alt="vibes" className="h-48 w-48 rounded-full" />
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4 text-white font-semibold"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default login;

export const getServerSideProps: GetServerSideProps<Props> = async (): Promise<
  GetServerSidePropsResult<Props>
> => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
