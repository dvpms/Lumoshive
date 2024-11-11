// src/App.jsx
import React from "react";
import PressReleaseSection from "./Components/PressReleaseSection";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import "bootstrap-icons/font/bootstrap-icons.css";

const dummyData = [
  {
    category: "Siaran Pers",
    items: [
      {
        title: "Artikel 1",
        date: "6 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 2",
        date: "7 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 3",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 4",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 5",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 6",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 7",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 8",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 9",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 10",
        date: "8 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
    ],
  },
  {
    category: "Behind The Scene",
    items: [
      {
        title: "Artikel 1",
        date: "12 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 2",
        date: "13 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
    ],
  },
  {
    category: "Social Impact",
    items: [
      {
        title: "Artikel 1",
        date: "12 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        title: "Artikel 2",
        date: "13 Oktober 2023",
        imageUrl: "https://via.placeholder.com/300x200",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Menampilkan PressReleaseSection untuk setiap kategori di dummyData */}
      {dummyData.map((category, index) => (
        <PressReleaseSection
          key={index}
          title={category.category}
          items={category.items}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
