import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiOutlineDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";

const colors = [
  "from-indigo-500",
  "from-cyan-500",
  "from-emerald-500",
  "from-teal-500",
  "from-green-500",
  "from-lime-500",
  "from-yellow-500",
  "from-amber-500",
  "from-orange-500",
  "from-red-500",
  "from-warmGray-500",
  "from-purple-500",
  "from-fuchsia-500",
  "from-pink-500",
  "from-rose-500",
];

const Center = () => {
const { data: session } = useSession();
const [color, setColor] = useState<string | null>(null);

useEffect(() => {
    setColor(shuffle(colors).pop() || null);
}, []);

  return (
    <div className="flex-grow ">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-red-200 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          {session?.user?.image && (
            <img className="rounded-full" src={session?.user?.image} alt="" />
          )}
          <h2>{session?.user?.name}</h2>
          <AiOutlineDown />
        </div>
      </header>

      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}></section>
    </div>
  );
};

export default Center;
