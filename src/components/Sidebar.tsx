import {
    AiOutlineHome,
    AiOutlineSearch,
    AiOutlinePlusCircle,
    AiOutlineHeart,
  } from "react-icons/ai";
  import { VscLibrary } from "react-icons/vsc";
  import { BiRss } from "react-icons/bi";
  
  import {signOut} from 'next-auth/react'
  const Sidebar = () => {
    return (
      <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
          <button className="flex items-center space-x-2 hover:text-white">
            <AiOutlineHome className="h-5 w-5" />
            <p>Home</p>
          </button>
  
          <button className="flex items-center space-x-2 hover:text-white">
            <AiOutlineSearch className="h-5 w-5" />
            <p>Search</p>
          </button>
  
          <button className="flex items-center space-x-2 hover:text-white">
            <VscLibrary className="h-5 w-5" />
            <p>Library</p>
          </button>
  
          <hr className="border-t-[0.1px] border-gray-900" />
  
          <button className="flex items-center space-x-2 hover:text-white">
            <AiOutlinePlusCircle className="h-5 w-5" />
            <p>Create Playlist</p>
          </button>
  
          <button className="flex items-center space-x-2 hover:text-white">
            <AiOutlineHeart className="h-5 w-5" />
            <p>Liked Songs</p>
          </button>
  
          <button className="flex items-center space-x-2 hover:text-white">
            <BiRss className="h-5 w-5" />
            <p>Followed Artists</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900" />
  
          {/* Playlist */}
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
          <p className="cursor-pointer hover:text-white"> Playlist Name...</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  