import type { Dispatch, SetStateAction } from "react";
import { capitalize } from "../../utils/capitalize";
import { subIndustrys, type DatesIndustrys } from "../../store/subIndustrys";

interface Props {
    indus: string;
    setFilter: Dispatch<SetStateAction<string>>
    filter: string;
}

export default function SubNav({ indus, setFilter, filter }: Props) {
    return(
        <nav className="w-full h-auto mt-10">
            <ul className="flex flex-row bg-colorBlue rounded-none md:rounded-lg pt-2 justify-center items-center md:gap-6">
                {/* <li className="flex justify-center items-center"> /// Filtro de todos
                    <button
                        className={`text-xs md:text-base xl:text-xl py-2 px-1 transition-all duration-150 ${filter === "" ? "bg-white text-black rounded-md" : "text-white font-semibold"}`}
                        onClick={() => setFilter("")}>Todos</button>
                </li> */}
                {
                    subIndustrys[indus].map((sub: DatesIndustrys) => {
                        const size = subIndustrys[indus].length == 5 ? 0 : 4
                        return (
                            <li>
                                <button
                                    className={`text-sss md:text-base xl:text-xl py-3 md:p-4 transition-all duration-150 mx-${size} px-2
                                        ${filter === sub.name ? "bg-white text-black rounded-md" : "text-white font-semibold hover:backdrop-contrast-75 rounded-md"}`}
                                    onClick={() => setFilter(sub.name)}>
                                    {capitalize(sub.name)}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    )
}