"use client";

import React, { useRef, useEffect, useState } from "react";
import Root from "./components/Root";
import LeaderBoard from "./components/LeaderBoard";
import Upgrade from "./components/Upgrade";
import History from "./components/History";
import Latest from "./components/Latest";
import Image from "next/image";

const MyRefComponent: React.FC = () => {
  const nameref = useRef<HTMLParagraphElement>(null);
  const roleref = useRef<HTMLDivElement>(null);
  const [imageUrl, setImageUrl] = useState<string>('https://lh3.googleusercontent.com/a/ACg8ocLnqImK9z7vYCLIzpCGoU5k8XOwzwXOdT8Q9KHWG-yDJXlpytM=s96-c');
  
  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('user') || '')
      if (nameref.current) {
        nameref.current.textContent = `Welcome ${data['username']}`;
      }
      if (roleref.current) {
        roleref.current.textContent = data['role']
      }
      setImageUrl(data['photo']);
    }, 500);
  },[])

  return (
    <Root>
      <div className="w-full p-2 bg-base-200 rounded-box flex flex-row items-center">
        <div className="w-16 rounded-full overflow-hidden">
          <Image alt="" src={imageUrl} width={64} height={64} />
        </div>
        <div className="px-4 flex-1">
          <p className="text-lg" ref={nameref}>Welcome Aaron</p>
          <div className="badge badge-warning" ref={roleref}>Warning</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <span className="material-symbols-rounded">edit</span>
        </button>
      </div>
      <div className="flex flex-row gap-4 w-full">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4">
          <Latest />
          <History />
        </div>
        {/* Right */}
        <div className="flex-1 flex flex-col gap-4">
          <Upgrade />
          <LeaderBoard />
        </div>
      </div>
    </Root>
  );
}

export default MyRefComponent;