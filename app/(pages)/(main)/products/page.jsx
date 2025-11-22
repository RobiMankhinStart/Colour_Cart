import React from "react";
// import ProCard from "@/app/components/Common/ProCard";
import Pagination from "@/app/components/Common/Pagination";
import ProList from "@/app/components/Products/ProList";
import FilterPanel from "@/app/components/Products/FilterPanel";
import MobileFilter from "@/app/components/Products/MobileFilter";

async function getProducts(limit = 10, skip = 0, category = "") {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  const res = await fetch(
    url,
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

  // const selectedCategory = params.categories || "";
  // Extract selected categories
  const selectedCategories =
    params.categories && params.categories.length > 0
      ? params.categories.split(",") // ["beauty","fragrances"]
      : [];

  // Decide API call:
  // If 1 category -> call category endpoint for accuracy + pagination
  const activeCategory =
    selectedCategories.length === 1 ? selectedCategories[0] : "";

  const Products = await getProducts(limit, skip, activeCategory);

  let filteredProducts = Products.products || [];

  // const Products = await getProducts(limit, skip, selectedCategory);

  // Server-side filtering
  // let filteredProducts = Products.products || [];

  if (selectedCategories.length > 1) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }

  // If no products found
  const noProductsFound = filteredProducts.length === 0;
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
                    {filteredProducts.length}
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
                {/* <ProList products={filteredProducts} /> */}
                {noProductsFound ? (
                  <div className="w-full text-center py-20">
                    <h2 className="text-2xl font-semibold text-red-700">
                      Products Not Available
                    </h2>
                    <p className="text-gray-400 text-lg mt-2">
                      Select a different category.
                    </p>
                  </div>
                ) : (
                  <ProList products={filteredProducts} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
