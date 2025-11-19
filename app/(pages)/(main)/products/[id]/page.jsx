import ProductDetails from "@/app/components/ProductDetails/ProductDetails";
import Image from "next/image";
import Reviews from "@/app/components/common/Reviews";
import RelatedProCard from "@/app/components/common/RelatedProCard";
import ProClient from "@/app/components/ProductDetails/ProClient";
async function getProduct(id) {
  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      caches: "no-store",
    },
    {
      next: { revalidate: 10 },
    }
  );
  // if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

const Page = async ({ params }) => {
  // removing await from params
  const { id } = await params;
  console.log(id);

  const product = await getProduct(id);
  console.log("single vProduct", product);

  return (
    <div className="container">
      <div className="font-inter p-10 flex flex-col md:flex-row gap-10">
        <ProductDetails product={product} />

        <ProClient product={product} />
      </div>
      {/* Review part  */}
      <Reviews product={product} />
      {/* Related Product slider  */}
      <RelatedProCard singleProduct={product} />
    </div>
  );
};
export default Page;
