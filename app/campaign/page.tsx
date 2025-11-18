// app/about/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchDonation from "@/components/SearchDonation";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";
import DonationCard from "@/components/DonationCard";

export default function Campaign() {
  const [sort, setSort] = useState<"terdekat" | "terbaru">("terdekat");
  const [medan, setMedan] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [mitra, setMitra] = useState("");

  const handleApply = () => {
    console.log({
      sort,
      medan,
      lokasi,
      mitra,
    });
  };
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <div className="!overflow-x-hidden bg-leaf-50">
      <Navbar />
      <Jumbotron
        imageUrl="/assets/img/background/campaign_background.jpeg"
        title="Donasi Bibit Pohon Resapling"
        description=""
      />
      <SearchDonation />
      <section className="donation  px-6 sm:px-12 mt-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 mt-10 mx-auto justify-between">
          {donationCards.map((card, index) => (
            <DonationCard key={index} {...card} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const donationCards = [
  {
    image: "/assets/img/item/sinarmas.jpeg",
    title: "Sinarmas",
    description: "Menanam kembali kertas menjadi pohon bersama PT. Sinarmas",
    current: "240,210 Bibit",
    target: "500,000 Bibit",
    progress: 49,
    deadline: "6 hari lagi",
  },
  {
    image: "/assets/img/item/ikn.jpg",
    title: "Otorita IKA-EN",
    description: "Revitalisasi Hutan di Kalimantan akibat proyek strategis",
    current: "147,783 Bibit",
    target: "600,000 Bibit",
    progress: 23,
    deadline: "2 Minggu lagi",
  },
  {
    image: "/assets/img/item/gemarsorong.jpg",
    title: "Hulujaya",
    description: "Reboisasi Mangrove pencegah abrasi di Sorong Papua",
    current: "21,023 Bibit",
    target: "100,000 Bibit",
    progress: 21,
    deadline: "1 Bulan lagi",
  },
];
