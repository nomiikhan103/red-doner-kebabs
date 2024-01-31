import Header from "@/component/header/Header";
import HomeMain1 from "@/component/main/HomeMain1";
import SearchModal from "@/component/modal/SearchModal";
import VideoModal from "@/component/modal/VideoModal";
import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Home Page ",
  description: "Made by Hub Solutions",
};

export default function Home() {
  return (
    <div className='wrapper'>
      <Header style={"header-1"} />
      <HomeMain1 />
      <VideoModal />
      <SearchModal style='default' />
      <ToastContainer />
    </div>
  );
}
