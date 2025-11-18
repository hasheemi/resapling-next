"use client";
import Link from "next/link";
import Campaign, { donationCards } from "../campaign/page";
import SearchDonation from "@/components/SearchDonation";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import React, { Component } from "react";
import DonationCard from "@/components/DonationCard";
import Image from "next/image";

interface DonationCardProps {
  nama: string;
  jumlah_donasi: string;
}

export const user_leaderboard = [
  {
    nama: "Ahmad Rahman",
    jumlah_donasi: 5000000
  },
  {
    nama: "Siti Nurhaliza",
    jumlah_donasi: 4500000
  },
  {
    nama: "Budi Santoso",
    jumlah_donasi: 4200000
  },
  {
    nama: "Maya Sari",
    jumlah_donasi: 3800000
  },
  {
    nama: "Rizki Pratama",
    jumlah_donasi: 3500000
  },
  {
    nama: "Dewi Anggraini",
    jumlah_donasi: 3200000
  },
  {
    nama: "Fajar Nugroho",
    jumlah_donasi: 3000000
  },
  {
    nama: "Lina Marlina",
    jumlah_donasi: 2800000
  },
  {
    nama: "Hendra Wijaya",
    jumlah_donasi: 2500000
  },
  {
    nama: "Putri Amelia",
    jumlah_donasi: 2200000
  }
]

function Campaign_try(){
  return(
    <>
      <SearchDonation />
      <section className="donation  px-6 sm:px-12 mt-4 pb-20">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 mt-10 mx-auto justify-between">
          {user_leaderboard.map((card, index) => (
          <DonationCard key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  )
    
}

function Leaderboard() {
  return(
    <>
      <h1 className="text-center"> LEADERBOARD </h1>
      <div className="w-full flex justify-center gap-5 items-end p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center gap-2">
          {user_leaderboard.map((user, index) => (
            <div key={index} className="bg-white rounded-xl w-md shadow-md p-4">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{user.nama}</h3>
                  <p className="text-gray-600">Rp {user.jumlah_donasi.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="!overflow-x-hidden bg-leaf-50">
          {/*
          <!-- Navbar --> */}
          <Navbar />

          {/*
          <!-- Topbar --> */}
          <Jumbotron imageUrl="/assets/img/background/about_background.jpeg"
            title="Membangkitkan Alam kembali dengan tunas dan harapan"
            description="Dari pucuk yang merkah, asa bersemi. Setiap tunas adalah janji kehidupan, setapak kecil menghijaukan kembali hamparan bumi." 
          />

          {/*
          <!-- Breadcrumbs --> */}
          <div className="w-full flex flex-row justify-center items-center mt-8 gap-6">
            <a className="underline text-black-300 font-medium decoration-green-600" href="">Campaign</a>
            <a className="underline text-black-300 font-medium decoration-green-600" href="">Leaderboard</a>
          </div>
            
            <Leaderboard />
            <SearchDonation />
            <section className="donation  px-6 sm:px-12 mt-4 pb-20">
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 mt-10 mx-auto justify-between">
                {donationCards.map((card, index) => (
                <DonationCard key={index} {...card} />
                ))}
              </div>
            </section>
        </div>
      </>
    );
  }
}
