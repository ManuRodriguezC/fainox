import FormContact from "./FormContact";
import ListCotizacion from "../cotizacion/listCotizacion";

export default function Offices() {


  return (
    <section className="w-full px-5 md:px-20 h-auto flex flex-col justify-center items-center">
      <div className="flex w-full flex-col xl:flex-row justify-around items-center">
        <ListCotizacion />
        <div className={`h-auto w-full flex justify-center items-center xl:w-[40%]`}>
          <FormContact pay={false} />
        </div>
      </div>
    </section>
  )
}
