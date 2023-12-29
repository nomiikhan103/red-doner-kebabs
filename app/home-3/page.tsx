import Header2 from "@/component/header/Header2";
import HomeMain3 from "@/component/main/HomeMain3";
import SearchModal from "@/component/modal/SearchModal";
import VideoModal from "@/component/modal/VideoModal";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cafeu Home Page 3',
  description: 'Developed by Azizur Rahman',
}
export default function Home3() {
    return (
        <div className="wrapper">
            <Header2 theme="theme-3" logo="img/logo/logo-3.png"/>
            <HomeMain3/>
            <SearchModal style="yellow-theme"/>
            <VideoModal/>
        </div>
    )
}