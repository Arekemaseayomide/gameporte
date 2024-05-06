import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
        <div className="bg-dark text-white  relative">
      <div className="mx-auto flex py-4 px-2 bottom-0 left-0 right-0 justify-between items-center relative z-10">
        <Image src="/home.svg" alt="Home" width={30} height={30} className="ml-8" />
        <Image src="/icon.svg" alt="Icon" width={30} height={30} />
        <Image src="/media.svg" alt="Media" width={30} height={30} />
        <Image src="/records.svg" alt="Records" width={30} height={30} className="mr-8" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image src="/background.svg" alt="Background" layout="fill" className="object-cover" />
      </div>
      </div>
    </footer>
  );
}

export default Footer;
