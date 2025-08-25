"use client"
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import BlogHero from "../../components/BlogHero";

export default function Home() {
  return (
    <div>
        <Header />
        <BlogList />
        <BlogHero />
        <Footer />
    </div>
  );
}
