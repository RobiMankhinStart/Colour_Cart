import ProductDetails from "@/app/components/ProductDetails/ProductDetails";
import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 10 },
  });
  // if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

const ProductDetail = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const product = await getProduct(id);
  console.log(product);

  return (
    <div className="font-inter p-10 flex flex-col md:flex-row gap-10">
      {/* <div className="flex-1 flex items-center justify-center">
        <Image
          src={product?.thumbnail}
          alt="product img"
          height={300}
          width={300}
          className="object-cover rounded-md"
        />
      </div> */}
      <ProductDetails />

      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-semibold text-black">${product.price}</p>

        <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 w-fit">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductDetail;
