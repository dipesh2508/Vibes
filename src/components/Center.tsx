import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiOutlineDown } from "react-icons/ai";

const Center = () => {
const { data: session } = useSession();

return (
    <div className="flex flex-grow text-white">
        <h1>This is center</h1>
        <header>
            <div className="flex items-center space-x-3 opacity-90">

             {session?.user?.image && <img className="rounded-full" src={session?.user?.image} alt="" />}
                <h2>{session?.user?.name}</h2>
                <AiOutlineDown />
            </div>
        </header>
    </div>
);



};

export default Center;
