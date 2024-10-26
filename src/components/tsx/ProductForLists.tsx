import type { Product } from "../../store/types/product";
import ButtonCotizacion from "./ButtonCotizacion";

export default function ProductForLists({name, description, images}: Product) {
    return (
        <div
            className={`w-[350px] min-h-[600px] max-h-[600px] flex flex-col gap-4 mb-10 backgroundProduct px-4 rounded-md
                seeContent cursor-pointer border-2 hover:border-gray-400 hover:shadow-box-black transition-all duration-100`}
            >
            <a href={`/producto/${name}`}>
                <img
                className="w-full h-[350px] rounded-md object-cover"
                // height="350"
                // width="350"
                src={images[0]}
                alt={name}
                />
            </a>
            <div className="w-full flex flex-col gap-5 mb-5">
                <div className="flex flex-row justify-between gap-4">
                <a href={`/producto/${name}`} className="w-[220px] text-xl text-left font-bold text-colorBlue">
                    {name}
                </a>
                <ButtonCotizacion name={name} />
                </div>
                <p className="text-sm text-pretty line-clamp-6">{description}</p>
            </div>
        </div>
    )
}