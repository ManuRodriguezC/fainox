import { useEffect, useState } from "react";
import { getCarProducts } from "../../lib/carCotizacion";
import { productos } from "../../store/productos";
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

  useEffect(() => {
    const productsToCar = getCarProducts();
    if (productsToCar) {
      setListProducts(
        productos.filter(({ name }: Product) => productsToCar.includes(name))
      );
    }
  }, [listProducts]);

  return (
    <div className="flex flex-col w-[800px] justify-center items-center gap-10">
      <h4 className="text-colorBlue text-2xl font-semibold">Lista de Productos para Cotización</h4>
      {listProducts.length > 0 ? (
        <ul className="w-full flex flex-wrap justify-center items-center gap-4">
          {listProducts.map((product, index) => (
            <li
              key={index}
              className="w-[250px] h-auto flex flex-row justify-around items-center border-2 border-gray-400 rounded-lg shadow-box-black">
              <img className="w-28 h-2w-28" src={product.images[0]} alt={product.name} />
              <div className="h-full flex flex-col justify-between">
                <h3 className="text-colorBlue font-semibold">{product.name}</h3>
                <ButtonCotizacion name={product.name} size="S" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en la cotización</p>
      )}
    </div>
  );
}
