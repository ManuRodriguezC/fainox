import { useEffect, useState } from "react";
import { getCarProducts } from "../../lib/carCotizacion";
import { productos } from "../../store/productos";
import { productosUsados } from "../../store/productosUsados";
import ButtonCotizacion from "../tsx/ButtonCotizacion";

interface Product {
  name: string;
  industry: string[];
  description: string;
  linea: string;
  images: string[];
}

export default function ListCotizacion() {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [control, setControl] = useState<boolean>(false)

  useEffect(() => {
    const productsToCar = getCarProducts();
    if (productsToCar) {
      const listProducts = productos.filter(({ name }: Product) => productsToCar.includes(name))
      const listProductsUsed = productosUsados.filter(({ name }: Product) => productsToCar.includes(name))
      setListProducts(listProducts.concat(listProductsUsed));
    }
  }, [control]);

  return (
    <div className="flex flex-col w-full xl:w-[45%]">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <h4 className="text-colorBlue text-center text-2xl font-semibold">Lista de Productos para Cotización</h4>
        <p className="text-gray-500 font-semibold">Numero de Productos: {listProducts.length}</p>
      </div>
      {listProducts.length > 0 ? (
        <table className="table-fixed bg-gray-200 mt-10 shadow-box-black">
          <thead className="text-xl text-colorBlue bg-gray-50">
            <tr>
              <th className="border-y-[1px] border-l-[1px] text-center pr-10 border-white">Producto</th>
              <th className="border-y-[1px] border-gray-400"></th>
              <th className="border-y-[1px] border-r-[1px] border-white"></th>
            </tr>
          </thead>
          <tbody className="overflow-auto" style={{ maxHeight: '500px', display: 'block' }}>
            {listProducts.map((product, index) => (
              <tr
                key={index}
                className={`${index % 2 ? "bg-gray-100" : "bg-gray-200"} hover:bg-gray-300 transition-colors duration-200 w-full`}
                style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}
              >
                <td className="w-[50%] md:w-[60%] border-[1px] border-white px-5">
                  <h3 className="text-colorBlue text-base font-semibold">{product.name}</h3>
                </td>
                <td className="border-b-[1px] border-white px-5 flex justify-center">
                  <img className="w-24 h-24 object-cover" src={product.images[0]} alt={product.name} />
                </td>
                <td className="w-[20%] md:w-[10%] border-[1px] border-white px-3 md:px-5">
                  <ButtonCotizacion name={product.name} size="S" control={control} setControl={setControl} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      ) : (
        <p>No hay productos en la cotización</p>
      )}
    </div>
  );
}
