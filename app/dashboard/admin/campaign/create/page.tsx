"use client"
import styles from "./create.module.css";
import Root from "@/app/dashboard/components/Root";
import Image from "next/image";

export default function Campaign() {
  return(
    <Root show={true}>
      <div className="flex justify-between items-center border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Buat Campaign</h2>
      </div>
      <div className="w-full h-screen bg-leaf-50 flex flex-col gap-4">
        <div className="bg-gray-100 max-w-7xl rounded-lg shadow-lg flex">
          <div className={`w-1/3 border-r border-gray-200 p-8 flex flex-col items-center`}>
            <section className="donation">
              <div className="card bg-white rounded-xl shadow-md overflow-hidden">
                <Image src={"/assets/img/item/gemarsorong.jpg"} alt={""} width={400} height={250}
                  className="w-full h-48 object-cover rounded-xl" />
                <div className="mt-4 p-4">
                  <h3 className="font-bold text-lg">Judul</h3>
                  <p className="title text-gray-600 text-sm mt-2">Deskripsi</p>
                  <p className="target text-sm mt-3">
                    Rp. 0 <span className="text-gray-500">Target 30jt</span>
                  </p>
                  <div className="progress bg-gray-200 rounded-full h-2 mt-2">
                    <div className="full bg-leaf-500 h-2 rounded-full" style={{ width: `100%` }}></div>
                  </div>
                  <p className="deadline text-sm text-gray-500 mt-2">999 hari lagi </p>
                </div>
              </div>
            </section>
          </div>

          {/*
          <!-- Main Content Form --> */}
          <form className="flex-1 p-10 space-y-6">
            {/*
            <!-- Basic Info Fields --> */}
            <div className="grid grid-cols-1 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Judul Campaign</legend>
                <input type="text" className="input w-full" placeholder="Type here" />
              </fieldset>
            </div>

            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Deskripsi Campaign</legend>
                <textarea className={`input w-full ${styles.myTextarea}`} placeholder="Type here" />
              </fieldset>
            </div>
            {/* Yayasan Info */}
            <div className="grid grid-cols-2 gap-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Tanggal Mulai</legend>
                <input type="date" className="input w-full" placeholder="Type here" />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Tanggal Selesai</legend>
                <input type="date" className="input w-full" placeholder="Type here" />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Target Donasi</legend>
                <input type="number" className="input w-full" placeholder="Type here" />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                  <legend className="fieldset-legend">Gambar Poster</legend>
                  <input type="file" className="file-input w-full" />
              </fieldset>
            </div>
            <button className="w-full btn btn-success !text-white"> 
              <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14 1V2.5L2 6V5H0V11H2V10L4.11255 10.6162C4.0391 10.8985 4 11.1947 4 11.5C4 13.433 5.567 15 7.5 15C9.05764 15 10.3776 13.9825 10.8315 12.5759L14 13.5V15H16V1H14ZM6.0349 11.1768L8.90919 12.0152C8.69905 12.5898 8.14742 13 7.5 13C6.67157 13 6 12.3284 6 11.5C6 11.3891 6.01204 11.2809 6.0349 11.1768Z"
                  fill="#ffffff" />
              </svg>
              Sebarkan! </button>
            {/*
            <!-- About Me --> */}
          </form>
        </div>
      </div>
    </Root>
  )
}