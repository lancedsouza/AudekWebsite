// import { Geist, Geist_Mono } from "next/font/google";
// import Navbar from "@/component/navbar";
// import HeroSection from "@/component/hero"; 
// import Head from 'next/head';
// import features from "@/component/features";
// import Features from "@/component/features";
// import Footer from "@/component/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Your Page Title Here</title>
//         <meta name="description" content="A brief description of your page for SEO." />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content="Your Page Title Here" />
//         <meta property="og:description" content="A brief description of your page for Open Graph." />
//         <meta property="og:image" content="URL-to-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com" />
//         <link rel="canonical" href="https://yourwebsite.com" />
//       </Head>
//       <Navbar />
//       <HeroSection/>




//       <Features/>
//       <Footer/>

//     </>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/navbar";
import HeroSection from "@/component/hero"; 
import Head from 'next/head';
import Features from "@/component/features";
import Footer from "@/component/footer";

// Importing Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Page Title Here</title>
        <meta name="description" content="A brief description of your page for SEO." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Page Title Here" />
        <meta property="og:description" content="A brief description of your page for Open Graph." />
        <meta property="og:image" content="URL-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {/* The Navbar will automatically handle language changes */}
        <Navbar />
        <HeroSection />
        <Features />
        <Footer />
      </div>
    </>
  );
}
