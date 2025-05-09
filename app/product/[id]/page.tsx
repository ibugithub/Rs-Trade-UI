import { ProductDetails } from "@/components/product/productDetails"


export default async function Page({ params }) {
  const { id } = await params
  
  return (
    <div className="mt-[7.5rem] bg-gray-100">
      <ProductDetails productId={id} />
    </div>
  );
}