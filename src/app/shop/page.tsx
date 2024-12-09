import React from "react";
import ShopGrid from "@/components/shop-section/shopGrid";
import FilterBar from "@/components/shop-section/FilterBar";
import Pagination from "@/components/shop-section/Pagination";
import SecondBanner from "@/components/shop-section/SecondBanner";
import Banner from "@/components/shop-section/Banner";
import Feature from "@/components/Feature";

const Shop = () => {
    return (
        <main>

         {/* Banner */}
      <div className="relative flex items-center justify-center h-64 bg-cover bg-center" style={{ backgroundImage: "url('/banner1.png')" }}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 text-center text-black">
          <div className="mb-4">
            <img src="/logo.png" alt="Logo" className="mx-auto h-12" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Shop</h1>
          <nav className="text-sm">
            <a href="/" className="hover:underline">Home</a> &gt; <span>Shop</span>
          </nav>
        </div>
      </div>

        <FilterBar />
        <ShopGrid/>
        <Pagination/>
        {/* <SecondBanner/> */}
        <Feature/>
        </main>
    )
}

export default Shop;