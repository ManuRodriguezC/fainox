import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { addCarProduct, getCarProducts, removeCarProduct } from "../../lib/carCotizacion";

type Sizes = 'S'

interface Props {
  name: string;
  size?: Sizes;
  control?: boolean;
  setControl?: Dispatch<SetStateAction<boolean>>;
}

export default function ButtonCotizacion({ name, size, control, setControl }: Props) {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    const products = getCarProducts();
    const findProduct = products.includes(name);
    setExist(findProduct);
  }, [name]);

  const handleClick = () => {
    addCarProduct(name);
    console.log("test")
    setExist(true); // Actualizar el estado para reflejar que el producto existe
  };

  const handleClickDelete = () => {
    removeCarProduct(name);
    setExist(false); // Actualizar el estado para reflejar que el producto fue eliminado
    if (control && setControl) setControl(!control)
  };

  if (size === "S") {
    return (
      <button
        onClick={handleClickDelete}
        className="w-8 h-8 bg-transparent rounded-lg flex justify-center items-center text-red-700">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
      </button>
    )
  }

  return exist ? (
    <button
      onClick={handleClickDelete}
      className="relative text-center flex justify-center bg-red-600 items-center text-white font-semibold
      hover:text-white delay-300 h-10 px-8 py-2 rounded-md isolation-auto z-10 border-2 border-blue-800
      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full
      before:hover:left-0 before:rounded-full before:bg-colorBlue before:-z-10 before:aspect-square before:hover:scale-150
      overflow-hidden before:hover:duration-700"
    >
      Eliminar
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="relative text-center flex justify-center items-center text-colorBlue font-semibold hover:text-white
      delay-300 h-10 px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-blue-800 before:absolute
      before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0
      before:rounded-full before:bg-colorBlue before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden
      before:hover:duration-700"
    >
      Cotizar
    </button>
  );
}
