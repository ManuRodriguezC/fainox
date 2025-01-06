import { useMemo, useState } from "react";
import type { Product } from "../../store/types/product";
import ProductForLists from "./ProductForLists";
import SubNav from "./SubNav";
import { subIndustrys } from "../../store/subIndustrys";

interface Props {
    industry: string;
    filterProducts: Product[];
}

export default function     FilterListProduct({ industry, filterProducts }: Props) {
    const [filter, setFilter] = useState("")

    const filteredList = useMemo(() => {
        return filter === ""
            ? filterProducts
            : filterProducts.filter(product => product.subIndustry === filter)
    }, [filter, filterProducts])

    return (
        <div className="w-full">
            <SubNav indus={industry} setFilter={setFilter} filter={filter} />
            <p className="text-center md:text-right md:mr-10 mt-5 text-base md:text-lg text-gray-600">Productos encontrados: {filteredList.length}</p>
            <div className="w-full h-auto flex flex-row justify-center md:gap-5 xl:m-5">
                {subIndustrys[industry].some(indus => filter === "" || indus.name === filter) ? (
                    subIndustrys[industry].map((indus, index) => {
                        const size = 100 / subIndustrys[industry].length
                        if (filter === "" || indus.name === filter) {
                            return (
                                <img
                                    key={index}
                                    className={`${filter === indus.name ? "w-[100%] h-72" : `w-[${size}%] h-44`} object-cover rounded-none md:rounded-md shadow-box-black
                                    transition-all duration-200 brightness-75 hover:brightness-100`}
                                    src={indus.image}
                                    alt={indus.name}
                                />
                            );
                        }
                        return null;
                    })
                ) : (
                    <p>No se encontraron subindustrias para el filtro aplicado.</p>
                )}
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center py-10 md:p-10">
                {
                    filteredList.map((product: Product) => (
                        <ProductForLists {...product} />
                    ))
                }
            </div>
        </div>
    )
}