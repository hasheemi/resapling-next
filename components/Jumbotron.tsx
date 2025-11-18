"use client";
import Image from "next/image";

interface JumbotronProps {
  title: string;
  imageUrl: string;
  description: string;
  imageAlt?: string;
  height?: string;
  overlayOpacity?: number;
  padding?: string;
}

export default function Jumbotron({
  title,
  imageUrl,
  description,
  imageAlt = "Background image",
  height = "h-[60vh] md:h-[80vh]",
  overlayOpacity = 80,
  padding = "px-6 sm:px-12",
}: JumbotronProps) {
  return (
    <section
      className={`jumbo my-4 sm:my-8 w-full ${height} relative flex justify-center items-center ${padding}`}
    >
      <div
        className="background bg-leaf-700 inset-0 absolute w-full h-full rounded-xl z-40"
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={200}
        className="object-cover rounded-xl absolute z-10 w-full h-full"
        priority
      />
      <div className="absolute z-50 transform m-auto w-3/4 sm:w-1/2 md:w-2/5 flex-col flex items-center justify-center">
        <h1
          className="font-bold text-white text-4xl md:text-5xl text-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {title}
        </h1>
        <p className="text-center text-white font-light z-50 mt-2">
          {description}
        </p>
        <a className="btn btn-white-300 rounded-lg mt-4 px-10 py-4 text-green-900"> Ayo Membantu </a>
      </div>
    </section>
  );
}
