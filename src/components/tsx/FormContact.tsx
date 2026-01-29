import type React from "react"
import { cleanCarProduct, getCarProducts } from "../../lib/carCotizacion";
import { useState } from "react";
import FormCotizacion from "./formCotizacion";
import FormWork from "./FormWork";

interface Props {
  work?: boolean;
}

export default function FormContact({ work }: Props) {

  const [controlSend, setControlSend] = useState(false)
  const [name, setName] = useState("")
  const [loading, setLoanding] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoanding(true);
    const formData = new FormData(event.currentTarget);
    let fields = Object.fromEntries(formData.entries());
    const carProducts = getCarProducts();
    const setInfo = {
        ...fields,
        products: carProducts.join('+'),
    };

    if (work) {
      try {
        const response = await fetch('/api/sendSellProducto', {
          method: 'POST',
          body: JSON.stringify(setInfo),
          headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        if (result.message === "Correo Enviado") {
          setControlSend(true);
          setName(`${fields.name}`);
        }
      } catch (err) {
        console.error('Error en el envío del correo:', err);
      } finally {
        setLoanding(false); // Desactiva el estado de carga
      }
    } else {
        // Si no hay pago, enviar la solicitud sin imagen
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                body: JSON.stringify(setInfo),
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();
            cleanCarProduct();
            if (result.message === "Correo Enviado") {
                setControlSend(true);
                setName(`${fields.name} ${fields.lastname}`);
                cleanCarProduct();
            }
        } catch (err) {
            console.error('Error en el envío del correo:', err);
        } finally {
            setLoanding(false); // Desactiva el estado de carga
        }
    }
};


  if (controlSend) {
    return (
      <div id="send" className="w-full lg:w-[1024px] py-5 my-10 h-auto flex flex-col gap-6 justify-around items-center rounded-xl bg-custom-blue-gradient shadow-box-black">
        <h1 className="text-white w-[80%] text-center font-medium text-2xl">¡Hola <span className="font-bold">{name}</span> pronto nuestro equipo se pondrá en contacto contigo!</h1>
        <p className="text-blue-100 text-lg text-center">Gracias por confiar en nosotros y querer ser parte de la familia Fainox Group</p>
        <a className="text-white text-center bg-white/20 py-2 px-10 rounded-full hover:bg-white hover:text-colorBlue transition-all duration-300" href="/desarrollosynovedades">Te invitamos a ver nuestros desarrollos</a>
      </div>
    )
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className={`w-full flex flex-col md:mt-0 py-10 justify-center items-center gap-4 md:p-5 ${work ? '' : ''}`}>
      {!work && <h1 className="text-colorBlue text-3xl font-bold">Estimado Cliente</h1>}
      {
        !work
          &&
          <p className="text-md text-gray-500 pb-4 text-center">
            Si requiere ampliar información sobre nuestros productos o tiene algún proyecto de desarrollo en el que necesite asesoría ..CONTACTENOS sin ningún COMPROMISO, Un asesor se comunicara con usted
          </p>
      }

      {
        work 
        && 
        <p className="w-auto md:w-[600px] text-colorBlue text-xl font-medium px-4 md:px-0 my-5 text-center">
          Si está interesado en conocer más sobre este esquema de colaboración, contáctenos y con gusto le ampliaremos la información.
        </p>
      }
      {
        !work 
        ?
        <FormCotizacion />
        :
        <FormWork />
      }

      <button className="relative group cursor-pointer mt-5 text-sky-50 overflow-hidden h-12 w-48 rounded-3xl shadow-box-black bg-sky-800 p-2 flex justify-center items-center font-extrabold">
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>

        {
          loading
            ?
            <p className="z-10 text-xl font-semibold sending"></p>
            :
            <p className="z-10 text-xl font-bold">
              {work ? "Enviar" : "Contactar"}
            </p>
        }
      </button>
    </form>
  )
}