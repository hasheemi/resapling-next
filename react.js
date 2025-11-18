import React from 'react';

function Dashboard() {
  return (
    <>
      {/* Note: Make sure you have Tailwind and DaisyUI setup in your React project.
        You might need to add the DaisyUI plugin to your tailwind.config.js
        and ensure your global CSS includes Tailwind's base styles.
        The <head> elements (like <link>, <script>, <title>) are usually
        managed outside the component, often in public/index.html or via a 
        Head management library like React Helmet.
      */}

      <div className="bg-green-100 h-dvh">
        {/* Navbar */}
        <div className="navbar bg-green-100">
          <div className="flex-1">
            <a className="btn btn-ghost">Resampling</a>
          </div>
          <div className="flex-none">
            <a className="btn btn-ghost">Beranda</a>
            <a className="btn btn-ghost">Berita</a>
            <a className="btn btn-ghost">Profile</a>
          </div>
        </div>

        {/* Topbar */}
        <div className="relative w-full flex justify-center mt-8">
          <img 
            className="rounded-xl w-full mx-[48px] object-cover h-[500px]" 
            src="https://www.figma.com/file/i8JLdyDaqYqMPHQNDtdpkh/image/69f551ea013ebc5fe713931d7772e37418f4bb91" 
            alt="" // Added alt attribute for accessibility
          />
          <div className="absolute flex flex-col justify-center items-center w-full h-full">
            <span className="text-white font-bold text-5xl">Membangkitkan Alam Kembali</span>
            <span className="text-white font-bold text-5xl mb-4">dengan Tunas dan Harapan</span>
            <p className="text-white font-light">Dari pucuk yang merkah, asa bersemi. Setiap tunas adalah janji</p>
            <p className="text-white font-light">kehidupan, setapak kecil menghijaukan kembali hamparan bumi.</p>
            <button className="btn btn-white-300 rounded-lg mt-4 px-10 py-4 text-green-900"> Ayo Membantu </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="w-full flex flex-row justify-center items-center mt-8 gap-6">
          <a className="underline text-black-300 font-medium decoration-green-600" href="">Campaign</a>
          <a className="underline text-black-300 font-medium decoration-green-600" href="">Leaderboard</a>
        </div>

        {/* Searchbar */}
        <input 
          className="mx-[48px] rounded-full mt-4 input input-sm w-1/2" 
          type="text" 
          placeholder="Value" 
        />

        {/* Cards */}
        <div className="flex flex-col w-full px-[20px] bg-white-200">
          {/* Card content would go here */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;