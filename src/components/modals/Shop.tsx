import { Shop } from "@/types/database";

export function ShopModal({ shop }: { shop: Shop }) {
  const { selling } = shop;
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selling.map((item, index) => {
          const { avatar, name, price } = item;
          return (
            <div
              key={index}
              className="flex flex-col items-center border-2 bg-blue-50 rounded-lg p-4"
            >
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 p-4 object-contain border-2 border-blue-500 rounded-lg mb-2"
              />
              <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
              <p className="text-sm text-gray-700">Price: {price} G</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
