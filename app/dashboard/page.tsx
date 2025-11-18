"use client";
import Link from "next/link";
import Campaign from "../campaign/page";
import Jumbotron from "@/components/Jumbotron";
import Navbar from "@/components/Navbar";
import React, { Component } from "react";

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
        </div>
      </>
    );
  }
}
