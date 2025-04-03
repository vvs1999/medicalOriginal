"use client";

import { Navbar } from "@/components/Navbar";
import { FaMapMarkerAlt, FaLinkedin, FaTwitter, FaCheck, FaPlay, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

// Define types for featured content
type VideoPost = {
  type: "video";
  src: string;
  title: string;
  description: string;
  poster: string;
};

type BlogPost = {
  type: "blog";
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
};

type Post = VideoPost | BlogPost;

export default function BlogPage() {
  // Array of featured content: one video and one blog post
  const featuredContent: Post[] = [
    {
      type: "video",
      src: "/videos/MedicalBilling.mp4",
      title: "Discover AccurusBill",
      description: "Learn more about how AccurusBill empowers private clinics with comprehensive, cost-effective solutions.",
      poster: "/images/TN1.jpg",
    },
    {
      type: "blog",
      slug: "7-overlooked-mistakes-medical-billing-denials",
      title: "7 Overlooked Mistakes That Lead to Medical Billing Denials",
      description: "Discover 7 commonly overlooked billing errors that lead to costly claim denials—and learn how to prevent them to boost cash flow and clean claim rates.",
      image: "/images/medical-billing-denials.jpg",
      date: "April 02, 2025",
    },
  ];

  // Array of blog posts for the "Latest Blog Posts" section (can be empty for now)
  const blogPosts: BlogPost[] = [
    // Add more blog posts here in the future
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Featured Content */}
        <section className="relative bg-gradient-to-b from-[#3E37A1] to-[#5A50DA] py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16">
              Featured Content
            </h1>

            {/* Grid Layout for Featured Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredContent.map((item, index) =>
                item.type === "video" ? (
                  <VideoCard key={index} video={item} />
                ) : (
                  <BlogCard key={index} blog={item} />
                )
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-[#F5F5FC]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#3E37A1] relative">
              Latest Blog Posts
              <span className="block w-24 h-1 bg-[#6C5CE7] mx-auto mt-2 rounded-full"></span>
            </h2>
            {blogPosts.length > 0 ? (
              <>
                <p className="text-center text-lg text-gray-700 mb-12">
                  Explore insights, updates, and tips to optimize your practice’s financial performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {blogPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                        <h3 className="text-xl font-semibold text-[#3E37A1] mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4">{post.description}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-[#6C5CE7] hover:text-[#FFC107] font-semibold transition duration-300"
                        >
                          Read More <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-lg text-gray-700">
                Stay tuned! We’re working on bringing you more insightful articles, updates, and tips for your practice. Check back soon for our latest blog posts.
              </p>
            )}
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
                © 2024 AccurusBill. Empowering Private Clinics with Comprehensive, Cost-Effective Solutions
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
                <Link href="/" className="text-white hover:text-[#FFC107] transition duration-300">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-[#FFC107] transition duration-300">
                  About Us
                </Link>
                <Link href="/services" className="text-white hover:text-[#FFC107] transition duration-300">
                  Services
                </Link>
                <Link href="/blog" className="text-white hover:text-[#FFC107] transition duration-300">
                  Blog
                </Link>
                <Link href="/contact" className="text-white hover:text-[#FFC107] transition duration-300">
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
function VideoCard({ video }: { video: VideoPost }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
}

// BlogCard Component for featured blog post
function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl group">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-auto aspect-video object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 rounded-lg"></div>
      </div>
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-white">
        {blog.title}
      </h2>
      <p className="mt-2 text-base opacity-90 max-w-md mx-auto">
        {blog.description}
      </p>
      <Link
        href={`/blog/${blog.slug}`}
        className="mt-4 inline-flex items-center text-[#FFC107] hover:text-white font-semibold transition duration-300"
      >
        Read More <FaArrowRight className="ml-2" />
      </Link>
    </div>
  );
}
