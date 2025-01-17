import type { Product } from "../../store/types/product";
import ButtonCotizacion from "./ButtonCotizacion";

export default function ProductForLists({ name, description, images }: Product) {
  return (
    <div
      className={`w-full md:w-[350px] min-h-[580px] max-h-[580px] flex flex-col gap-4 mb-10 backgroundProduct px-4 rounded-md
                seeContent cursor-pointer border-2 hover:border-gray-400 hover:shadow-box-black transition-all duration-100`}
    >
      <a href={`/producto/${name.toLowerCase().replaceAll(' ', '-')}`}>
        <img
          className="w-full h-[320px] rounded-md object-contain"
          src={images[0]}
          alt={name}
          style={{ viewTransitionName: "image" }}
        />
      </a>
      <div className="w-full flex flex-col gap-5 mb-5">
        <div className="flex flex-row justify-between gap-4">
          <a
            style={{ viewTransitionName: "title-product"}}
            href={`/producto/${name.toLowerCase().replaceAll(' ', '-')}`}
            className="w-[220px] px-4 md:px-0 text-base text-left font-bold text-colorBlue line-clamp-3">
            {name}
          </a>
          <ButtonCotizacion name={name} />
        </div>
        <p className="text-sm text-pretty md:px-0 line-clamp-6">{description}</p>
      </div>
    </div>
  )
}