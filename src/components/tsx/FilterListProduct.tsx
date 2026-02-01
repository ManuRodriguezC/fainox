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
    const [filter, setFilter] = useState(filterProducts[0].subIndustry)
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
                                    className={`${filter === indus.name ? "w-[70%] h-72" : `w-[${size}%] h-44`} object-cover rounded-none md:rounded-md shadow-box-black
                                    transition-all duration-200`}
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
            {
                filter === "equipos para la industria farmacéutica" &&
                <div className="flex flex-col gap-4 py-10 px-6 sm:px-16 md:px-36 text-justify text-gray-700">
                    <p>FAINOX GROUP Cuenta con una amplia experiencia en el desarrollo de soluciones para las industrias FARMACEUTICAS, COSMETICAS Y DE SUPLEMENTOS DIETARIOS.</p>
                    <p>Diseñamos y fabricamos <strong className="text-colorBlue">equipos y sistemas en acero inoxidable sanitario</strong> para la industria <strong className="text-colorBlue">farmacéutica y cosmética,</strong> cumpliendo con los más altos estándares de <strong className="text-colorBlue">calidad, higiene y control superficial</strong> exigidos por normativas internacionales.</p>
                    <p>Nuestros procesos de fabricación incorporan <strong className="text-colorBlue">soldadura orbital automática (GTAW/TIG),</strong> garantizando <strong className="text-colorBlue">cordones uniformes, repetibilidad, mínima distorsión térmica y total penetración,</strong> fundamentales para aplicaciones críticas de proceso. Cada unión es ejecutada bajo parámetros controlados y procedimientos calificados.</p>
                    <p>Realizamos <strong className="text-colorBlue">acabados sanitarios de alta precisión,</strong> con control de <strong className="text-colorBlue">rugosidad superficial (Ra ≤ 0,8 μm / 0,5 μm según aplicación),</strong> pulido mecánico y electro pulido, asegurando superficies lisas, brillantes y libres de porosidad, que facilitan la limpieza, la esterilización y la validación de procesos.</p>
                </div>
            }
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