"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLinkedin, FaTwitter, FaCheck, FaPlay } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function BlogPage() {
  // Array of video data
  const videos = [
    {
      src: "/videos/MedicalBilling.mp4",
      //title: "Discover AccurusBill",
      description: "Check out this video to discover how to streamline your billing process and boost your practice’s revenue.",
      poster: "/images/TN1.jpg", // Updated path with leading slash
    },
    // {
    //   src: "/videos/MedicalBilling.mp4",
    //   title: "Our Mission",
    //   description: "See how AccurusBill is transforming revenue cycle management for independent physicians.",
    //   poster: "/images/TN1.jpg", // Updated path with leading slash
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Videos */}
        <section className="relative bg-gradient-to-b from-[#3E37A1] to-[#5A50DA] py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-12 md:mb-16"
            >
              Discover AccurusBill
            </motion.h1>

            {/* Grid Layout for Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video, index) => (
                <VideoCard key={index} video={video} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Placeholder Section */}
        <section className="py-20 bg-[#F5F5FC]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#3E37A1] relative">
              Our Blog
              <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-lg text-gray-700"
            >
              Stay tuned! We’re working on bringing you insightful articles,
              updates, and tips for your practice. Check back soon for our
              latest blog posts.
            </motion.p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3E37A1] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left Section: Copyright, Email, Address, and Navigation */}
            <div className="mb-6 md:mb-0">
              <p className="text-base text-center md:text-left">
                © 2024 AccurusBill. Empowering Private Clinics with
                Comprehensive, Cost-Effective Solutions
              </p>
              <div className="mt-4 space-y-2 text-center md:text-left">
                <p className="text-base flex items-center justify-center md:justify-start">
                  <FaMapMarkerAlt className="mr-2 text-[#FFC107] text-lg" />
                  AccurusBill 108 W 39th Street Ste 1006 #2018 <br />
                  New York, NY 10018 United States
                </p>
                <p className="text-base">Email: contact@accurusbill.com</p>
              </div>
              <div className="mt-4 flex justify-center md:justify-start space-x-4">
                <Link
                  href="/"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Services
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#FFC107] transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Section: Social Media and HIPAA Badge */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              {/* Social Media */}
              <div className="text-center md:text-right bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex justify-center md:justify-end space-x-6">
                  <Link
                    href="https://www.linkedin.com/company/accurusbill/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                  >
                    <FaLinkedin className="text-4xl" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com/explore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#FFC107] transition duration-300 transform hover:scale-110"
                  >
                    <FaTwitter className="text-4xl" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>

              {/* HIPAA Badge */}
              <div className="flex justify-center md:justify-end group">
                <div className="relative flex items-center">
                  <div className="bg-gradient-to-r from-[#4B5EAA] to-[#3E4A8A] rounded px-4 py-2 border-2 border-[#4B5EAA] shadow-xl group-hover:border-[#FFC107] transition duration-300">
                    <span className="text-base font-extrabold text-white group-hover:text-[#FFC107] transition duration-300 tracking-wide">
                      HIPAA COMPLIANT
                    </span>
                  </div>
                  <div className="absolute right-[-14px] w-8 h-8 bg-white/90 rounded-full flex items-center justify-center border-2 border-[#4B5EAA] shadow-md group-hover:bg-[#FFC107] group-hover:border-[#FFC107] transition duration-300">
                    <FaCheck className="text-[#4B5EAA] text-lg group-hover:text-white transition duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// VideoCard Component to handle thumbnail and play interaction
function VideoCard({ video, index }: { video: { src: string; title: string; description: string; poster: string }; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl">
        {/* Video Element */}
        <video
          ref={videoRef}
          controls={isPlaying}
          className="w-full h-auto aspect-video"
          poster={video.poster}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Thumbnail Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            onClick={handlePlay}
          >
            {/* Thumbnail Image */}
            <Image
              src={video.poster}
              alt={`${video.title} thumbnail`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 rounded-lg"></div>
            {/* Play Button */}
            <div className="relative w-16 h-16 bg-[#6C5CE7] rounded-full flex items-center justify-center group-hover:bg-[#FFC107] transition duration-300 transform group-hover:scale-110">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
        )}
      </div>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white">
        {video.title}
      </h2>
      <p className="mt-2 text-base opacity-90 max-w-md mx-auto">
        {video.description}
      </p>
    </motion.div>
  );
}
