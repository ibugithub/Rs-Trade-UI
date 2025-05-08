import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Audio & Video",
    link: "#",
    products: [
      {
        title: "Max 5.1 Home Theater",
        price: "$620.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
      {
        title: "V-Series 5.1 Home Theater",
        price: "$499.00",
        oldPrice: "$799.00",
        image: "/images/trimmer.png",
        isOnSale: true,
      },
      {
        title: "OLED C4 Series 55” 4K TV",
        price: "$1,249.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
      {
        title: "X90J 65 Inch TV 4K",
        price: "$1,329.00",
        oldPrice: "$1,499.00",
        image: "/images/trimmer.png",
        isOnSale: true,
      },
    ],
  },
  {
    title: "Home appliances",
    link: "#",
    products: [
      {
        title: "Multigroomer Grooming Kit",
        price: "$44.00",
        oldPrice: "$60.00",
        image: "/images/trimmer.png",
        isOnSale: true,
      },
      {
        title: "Compact Pulsator Washer",
        price: "$259.00",
        oldPrice: "$319.00",
        image: "/images/trimmer.png",
        isOnSale: false,
      },
      {
        title: "Full-Auto Compact Washer",
        price: "$270.00",
        oldPrice: "$309.00",
        image: "/images/trimmer.png",
        isOnSale: true,
      },
      {
        title: "Small Space Dryer",
        price: "$349.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
    ],
  },
  {
    title: "Air conditioner",
    link: "#",
    products: [
      {
        title: "AC 5000 BTU for Small Rooms",
        price: "$139.00",
        oldPrice: "$159.00",
        image: "/images/trimmer.png",
        isOnSale: true,
      },
      {
        title: "Dual Hose Portable AC",
        price: "$184.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
      {
        title: "Star 5,000 BTU AC w/ Wi-Fi",
        price: "$199.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
      {
        title: "BTU Window AC w/ Remote",
        price: "$179.00",
        oldPrice: null,
        image: "/images/trimmer.png",
        isOnSale: false,
      },
    ],
  },
];

export const MidCategory1 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 space-y-12 ">
      {categories.map((category, i) => (
        <div key={i} className="bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{category.title}</h2>
            <Link href="/category_details" className="text-blue-500 hover:underline">See more</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.products.map((product, j) => (
              <div key={j} className="border rounded-lg p-3 bg-white shadow-sm">
                <div className="relative w-full h-40 mb-2">
                  {product.isOnSale && (
                    <span className="absolute top-2 left-2 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                      Sale!
                    </span>
                  )}
                  <Image src={product.image} alt={product.title} fill className="object-contain" />
                </div>
                <div className="text-xs text-yellow-500 mb-1">★★★★★</div>
                <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                <div className="mt-1 text-sm font-semibold">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                  )}
                  <span>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
