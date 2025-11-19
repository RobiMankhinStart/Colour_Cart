import Left from "@/app/components/Products/Left";

// import { IoIosArrowDown } from "react-icons/io";
import React from "react";
// import ProCard from "@/app/components/Common/ProCard";
import Pagination from "@/app/components/Common/Pagination";
import ProList from "@/app/components/Products/ProList";
import FilterPanel from "@/app/components/Products/FilterPanel";
import MobileFilter from "@/app/components/Products/MobileFilter";

async function getProducts(limit = 10, skip = 0) {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      cache: "no-store",
    },
    {
      next: { revalidate: 10 },
    }
  );
  return res.json();
}
const Page = async ({ searchParams }) => {
  // const params = await searchParams;
  const params = await Promise.resolve(searchParams);
  const limit = Number(params.limit) || 10;
  const page = Number(params.page) || 1;
  const skip = (page - 1) * limit;

  const Products = await getProducts(limit, skip);

  // const Products = await getProducts();
  console.log("products:", Products);
  return (
    <div className="">
      <div className="container">
        <div className="mainDiv  mt-6 flex flex-col md:flex-row gap-6">
          {/* Mobile filter button & slide-out panel */}
          <MobileFilter />
          <div className="left w-full md:w-[260px] hidden md:block">
            {/* <Left /> */}
            <FilterPanel />
          </div>
          <div className="right w-full flex-1">
            {/* <Right /> */}
            <div className="mainDiv  font-inter">
              <div className="top flex flex-col sm:flex-row gap-4 items-center justify-between">
                <h3 className="text-[#6C6C6C] text-lg font-medium">
                  Selected Products :
                  <span className="text-black font-medium text-[20px]">
                    {Products.products.length}
                  </span>
                </h3>
                {/* ..........here the pagination component */}

                <Pagination total={Products.total} limit={limit} page={page} />

                {/* <div className="w-[256px] border border-[#D4D4D4] rounded-md flex justify-between py-3 px-4">
                  <p className="text-sm">By rating</p>
                  <IoIosArrowDown className="text-[24px]" />
                </div> */}
              </div>

              <div className="mt-6  flex flex-wrap items-center gap-4">
                <ProList products={Products.products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
