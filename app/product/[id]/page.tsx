import { ProductDetails } from "@/components/product/productDetails"

<<<<<<< HEAD
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  return (
    <div className="mt-[7.5rem] bg-gray-100">
      <ProductDetails productId={id} />
=======
export default function Page({params}: { params: {id: string}}) {
  return (
    <div className="mt-[7.5rem] bg-gray-100">
      <ProductDetails productId = {params.id}/>
>>>>>>> 981153660716c2c1c00e35f04726c4adafe20e94
    </div>
  )
}