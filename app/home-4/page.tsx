import Header2 from "@/component/header/Header2";
import HomeMain4 from "@/component/main/HomeMain4";
import SearchModal from "@/component/modal/SearchModal";
import VideoModal from "@/component/modal/VideoModal";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cafeu Home Page 4',
  description: 'Developed by Azizur Rahman',
}
export default function Home4() {
    return (
        <div className="wrapper">
            <Header2 logo="img/logo/logo-3.png" theme="theme-3"/>
            <HomeMain4/>
            <SearchModal style="yellow-theme"/>
            <VideoModal/>
        </div>
    )
}