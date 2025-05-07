import { ProductDetails } from "@/components/product/productDetails"

export default function Page({params}: { params: {id: string}}) {
  return (
    <div className="mt-[7.5rem] bg-gray-100">
      <ProductDetails productId = {params.id}/>
    </div>
  )
}