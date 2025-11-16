import ProductDetails from "@/app/components/ProductDetails/ProductDetails";
import Image from "next/image";
import DeliveryTruck from "../../../../../public/DeliveryTruck.png";
import shop from "../../../../../public/shop.png";
import verify from "../../../../../public/verify.png";
import Reviews from "@/app/components/common/Reviews";
import RelatedProCard from "@/app/components/common/RelatedProCard";
async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  // if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

const Page = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const product = await getProduct(id);
  console.log("single vProduct", product);

  return (
    <div className="container">
      <div className="font-inter p-10 flex flex-col md:flex-row gap-10">
        <ProductDetails product={product} />

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{product.title}</h2>
          <h3 className="text-3xl font-medium">${product.price}</h3>
          <p className="text-[#6C6C6C] text-[14px] my-6">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="hover:text-white duration-500 text-black border border-black py-[15px] px-[82px] cursor-pointer rounded-md hover:bg-gray-800 w-fit">
              Add to Wishlist
            </button>
            <button className="bg-black text-white py-4 px-[84px] cursor-pointer rounded-md hover:bg-gray-800 w-fit">
              Add to Cart
            </button>
          </div>
          {/* delivery part  */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
                <Image
                  src={DeliveryTruck}
                  alt="product img"
                  height={24}
                  width={24}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-[14px] font-medium flex flex-col">
                <p className="text-[#717171]">Free Delivery</p>
                <p>1-2 day </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
                <Image
                  src={shop}
                  alt="product img"
                  height={24}
                  width={24}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-[14px] font-medium flex flex-col">
                <p className="text-[#717171]">In Stock</p>
                <p>Today </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-14 flex items-center justify-center bg-[#F6F6F6] rounded-xl">
                <Image
                  src={verify}
                  alt="product img"
                  height={24}
                  width={24}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-[14px] font-medium flex flex-col">
                <p className="text-[#717171]">Guaranteed</p>
                <p>1 year </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review part  */}
      <Reviews product={product} />
      {/* Related Product slider  */}
      <RelatedProCard singleProduct={product} />
    </div>
  );
};
export default Page;
