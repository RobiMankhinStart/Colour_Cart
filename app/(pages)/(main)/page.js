import Advertisement from "@/app/components/Home/Advertisement";
import Banner from "@/app/components/Home/Banner";
import Category from "@/app/components/Home/Category";
import HomeProList from "@/app/components/Home/HomeProList";
import PopularPro from "@/app/components/Home/PopularPro";
import Sale from "@/app/components/Home/Sale";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner />
      <Advertisement />
      <Category />
      <HomeProList />
      <PopularPro />
      <Sale />
    </div>
  );
}
