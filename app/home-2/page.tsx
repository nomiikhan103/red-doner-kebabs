import Header2 from "@/component/header/Header2";
import HomeMain2 from "@/component/main/HomeMain2";
import ProductLightBoxModal from "@/component/modal/ProductLightBoxModal";
import SearchModal from "@/component/modal/SearchModal";
import VideoModal from "@/component/modal/VideoModal";
import { ToastContainer } from "react-toastify";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cafeu Home Page 2',
  description: 'Developed by Azizur Rahman',
}

export default function Home2() {
    return (
        <div className="wrapper">
            <Header2 logo="img/logo/logo-2.png" theme=""/>
            <HomeMain2/>
            <VideoModal/>
            <SearchModal style="blue-theme"/>
            <ProductLightBoxModal/>
            <ToastContainer/>
        </div>
    )
}