import { getOrders } from "@/api/order";

export default async function Page() {
  let ordersData;
  try {
    ordersData = await getOrders();
  } catch (err) {
    return <div>Failed to fetch orders </div>;
  }

  // snake_case ile eriş
  const orders = ordersData?.order_list || [];
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Orders</h1>
      <ul className="space-y-6">
        {orders.length === 0 && (
          <li className="text-gray-500 text-center bg-white py-4 rounded shadow">No orders found.</li>
        )}
        {orders.map((order: any) => (
          <li key={order.id} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-lg text-blue-700">Order #{order.id.slice(0, 8)}...</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.status === "WAITING_PAYMENT"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {order.status.replace("_", " ")}
              </span>
            </div>
            <ul className="mb-2 border-l-2 border-blue-200 pl-4 space-y-1">
              {order.product_list.map((product: any) => (
                <li key={product.id} className="text-gray-700">
                  <span className="font-medium">Product #{product.id}</span>
                  <span className="ml-2">₺{(product.price / 100).toFixed(2)}</span>
                  <span className="ml-2">× {product.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center text-gray-700 text-sm mt-2 gap-4">
              <div>
                <span className="font-medium">Total:</span> ₺{(order.total_price / 100).toFixed(2)}
              </div>
              <div>
                <span className="font-medium">Payment:</span> {order.payment_method.replace("_", " ")}
              </div>
              <div>
                <span className="font-medium">Created:</span> {order.created_at}
              </div>
              <div>
                <span className="font-medium">Updated:</span> {order.updated_at}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
