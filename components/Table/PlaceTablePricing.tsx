import { PricePlace, formatCurrency } from "@/lib/utils";

export default function PlaceTablePricing({
  prices,
}: {
  prices: PricePlace[];
}) {
  return (
    <>
      {prices.length > 0 && (
        <section className="bg-gray-100 p-2 text-xl lg:p-6 lg:text-2xl xl:p-12 xl:text-3xl">
          <h2 className="mb-4 text-center text-2xl font-bold lg:mb-6 lg:text-4xl xl:mb-8 xl:text-5xl">
            Precios
          </h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-center text-sm lg:text-xl">Día</th>
                  {prices[0].type.map((priceType) => (
                    <th
                      key={priceType.type}
                      className="text-center text-sm lg:text-xl"
                    >
                      {priceType.type.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prices.map((priceInfo) => (
                  <tr key={priceInfo.day} className="border-b">
                    <td className="text-center text-sm font-semibold lg:text-xl">
                      {priceInfo.day}
                    </td>
                    {priceInfo.type.map((priceType) => (
                      <td
                        key={priceType.type}
                        className="py-2 text-center text-sm lg:text-xl xl:py-4"
                      >
                        {formatCurrency(priceType.price)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}
