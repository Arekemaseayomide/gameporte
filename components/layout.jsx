
"use client";
import { useState, Fragment, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HomeSvg,
  DiscoverSvg,
  LibrarySvg,
  Songs,
  AudioSvg,
  RecentlyPlayedSvg,
  PlaylistSvg,
  MyPlaylistSvg,
  SearchSvg,
} from "./images/homeSvg";
import { usePathname } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Layout = ({ children, title }) => {
  const location = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const playlists = [
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlist na....",
    "Saturday was a Good Day",
    "Gidi Nights",
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlist na....",
    "Saturday was a Good Day",
    "Gidi Nights",
    "Running out of Playlist na....",
    "Saturday was a Good Day",
    "Gidi Nights",
  ];
  // const notifactaionRef = useRef(null);

  return (
    <div className="lg:container w-full flex flex-col relative">
     <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center py-2 text-sm text-gray-500 rounded-lg lg:hidden fixed top-0 z-30 w-full bg-dark"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full max-w-[295px] h-screen transition-transform -translate-x-full lg:translate-x-0 
          ${
            isSidebarOpen
              ? "translate-x-0 ease-out"
              : "-translate-x-full ease-in"
          }
          `}
        aria-label="Sidebar"
      >
        <div
          className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#FBBA12] scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          style={{
            backgroundImage: 'url("/maskgroup.png")',
          }}
        >
          {/* cancel mark */}
          <div className="flex justify-end px-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={`text-[#4F46BA] text-[20px] font-pro sm:hidden`}
            >
              X
            </button>
          </div>
          <div className="bg-[#0F0F0F]">
            <div className="  py-4 max-w-[231px] mx-auto w-full">
              <div className="flex items-center gap-2">
                <Image src="/user.png" width={62} height={62} />
                <p>Hey! Aleem</p>
              </div>
            </div>
          </div>

          <div className="max-w-[231px] mx-auto w-full">
            <div className="flex flex-col font-thin mt-[50px] gap-[17px]">
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px] `}
              >
                <HomeSvg />
                <p
                  className={`text-white text-base hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Home
                </p>
              </Link>
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px]`}
              >
                <DiscoverSvg />
                <p
                  className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Discover
                </p>
              </Link>
              <div className="h-[1px] mt-3 bg-[#282828] w-full" />
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px]`}
              >
                <LibrarySvg />
                <p
                  className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Your Library
                </p>
              </Link>
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px]`}
              >
                <Songs />
                <p
                  className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Liked Songs
                </p>
                <AudioSvg />
              </Link>
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px]`}
              >
                <RecentlyPlayedSvg />
                <p
                  className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Recently Played
                </p>
              </Link>
              <Link
                href="/"
                className={`flex gap-[15px] items-center
                  ${location === "/" ? "bg-dark" : ""}
                 rounded-[8px]`}
              >
                <PlaylistSvg />
                <p
                  className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                >
                  Create Playlist
                </p>
              </Link>
            </div>
          </div>
          {/* playlist */}
          <div className="max-w-[231px] mx-auto w-full mt-10">
            <div className="flex flex-col font-normal mt-[50px] gap-[17px]">
              <div
                className={`flex justify-between items-center
                  ${
                    location === "/" ? "bg-dark" : ""
                  } border-b border-[#282828] pb-4
                 `}
              >
                <div className="flex items-center gap-[15px]">
                  <MyPlaylistSvg />
                  <p
                    className={`text-white text-base  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                  >
                    My Playlist
                  </p>
                </div>
                <SearchSvg />
              </div>
              {playlists.map((playlist, index) => (
                <Link
                  href="/"
                  key={index}
                  className={`flex gap-[15px] items-center
                      ${location === "/" ? "bg-dark" : ""}`}
                >
                  <p
                    className={`text-[#D9D9D9] text-base font-thin  hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500`}
                  >
                    {playlist}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`lg:ml-[200px] lg:w-[90%]`}
        onClick={() => setIsSidebarOpen(false)}
      >
       <div className="sticky top-0 w-full z-50 ">
  <header className="hidden md:flex w-full gap-4 pt-6 py-3 bg-black items-center flex-wrap">
    {/* Header content for medium screens and above */}
    <div className="flex gap-2">
      <Image src="/leftarr.svg" width={40} height={41} />
      <Image src="/rightarr.svg" width={40} height={41} />
    </div>

    <div className="max-w-[471px] w-full relative">
      <Image
        src="/search.svg"
        width={20}
        height={20}
        className="absolute top-1/2 left-3 transform -translate-y-1/2"
      />
      <input
        type="text"
        className="w-full h-14 bg-transparent text-[#D9D9D9] pl-10 pr-3 border border-[#0F0F0F]"
      />
    </div>
  </header>

  <header className="flex md:hidden w-full py-4 items-center bg-[#0F0F0F] justify-between">
    {/* Header content for small screens */}
    <Image src="/user.png" width={50} height={50} className="ml-8" />
    
  </header>
</div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
