
export const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p className="text-gray-600 mb-6">Items in your cart will be saved for 30 days.</p>
      <div className="bg-white shadow-md rounded-lg p-6">
        
        <p className="text-gray-500">Your cart is currently empty.</p>
      </div>
    </div>
  );
}