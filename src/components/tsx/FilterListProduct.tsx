import { useMemo, useState } from "react";
import type { Product } from "../../store/types/product";
import ProductForLists from "./ProductForLists";
import SubNav from "./SubNav";
import { subIndustrys } from "../../store/subIndustrys";

interface Props {
    industry: string;
    filterProducts: Product[]
}

export default function FilterListProduct({ industry, filterProducts }: Props) {
    const [filter, setFilter] = useState("")

    const filteredList = useMemo(() => {
        return filter === ""
            ? filterProducts
            : filterProducts.filter(product => product.subIndustry === filter)
    }, [filter, filterProducts])

    return (
        <div className="w-full">
            <SubNav indus={industry} setFilter={setFilter} filter={filter} />
            <p className="text-right mr-10 mt-5 text-lg text-gray-600">Productos encontrados: {filteredList.length}</p>
            <div className="w-full h-auto flex flex-row justify-center gap-5 m-5">
                {subIndustrys[industry].some(indus => filter === "" || indus.name === filter) ? (
                    subIndustrys[industry].map((indus, index) => {
                        if (filter === "" || indus.name === filter) {
                            return (
                                <img
                                    key={index}
                                    className="h-44 w-72 object-cover rounded-md shadow-box-black hover:scale-110
                                    transition-all duration-200 brightness-75 hover:brightness-100"
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
            <div className="flex flex-wrap gap-6 justify-center items-center p-10">
                {
                    filteredList.map((product: Product) => (
                        <ProductForLists {...product} />
                    ))
                }
            </div>
        </div>
    )
}