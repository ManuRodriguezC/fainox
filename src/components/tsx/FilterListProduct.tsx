import { useMemo, useState } from "react";
import type { Product } from "../../store/types/product";
import ProductForLists from "./ProductForLists";
import SubNav from "./SubNav";

interface Props {
    industry: string;
    filterProducts: Product[]
}

export default function FilterListProduct({industry, filterProducts}: Props) {
    const [filter, setFilter] = useState("")

    const filteredList = useMemo(() => {
        return filter === ""
            ? filterProducts
            : filterProducts.filter(product => product.subIndustry === filter)
    }, [filter, filterProducts])

    return (
        <div className="w-full">
            <SubNav indus={industry} setFilter={setFilter} filter={filter}/>
            <p className="text-right mr-10 mt-5 text-lg text-gray-600">Productos encontrados: {filteredList.length}</p>
            <div className="flex flex-wrap gap-6 justify-center items-center p-10">
                {
                    filteredList.map((product: Product) => (
                        <ProductForLists {...product}/>
                    ))
                }
            </div>
        </div>
    )
}