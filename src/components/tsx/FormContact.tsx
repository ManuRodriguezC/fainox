import type React from "react"
import { cleanCarProduct, getCarProducts } from "../../lib/carCotizacion";
import { useState } from "react";

interface Props {
  pay?: boolean;
}

export default function FormContact({ pay }: Props) {

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

    if (pay) {
        const fileImage = fields.image as File;
        if (fileImage instanceof File) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const base64 = e.target?.result;
                if (typeof base64 === 'string') {
                    const imageBase64 = base64.split(',')[1]; // Extrae la parte base64

                    const requestBody = {
                        ...fields,
                        image: imageBase64, // Agrega la imagen en base64
                    };

                    try {
                        const response = await fetch('/api/sendSellProducto', {
                            method: 'POST',
                            body: JSON.stringify(requestBody),
                            headers: { 'Content-Type': 'application/json' },
                        });

                        const result = await response.json();
                        if (result.message === "Correo Enviado") {
                            setControlSend(true);
                            setName(`${fields.name} ${fields.lastname}`);
                        }
                    } catch (err) {
                        console.error('Error en el envío del correo:', err);
                    } finally {
                        setLoanding(false); // Desactiva el estado de carga
                    }
                }
            };

            // Iniciar la lectura del archivo como Data URL
            reader.readAsDataURL(fileImage);
        } else {
            console.error('No se seleccionó un archivo de imagen válido.');
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
        <a className="text-white text-center bg-white/20 py-2 px-10 rounded-full hover:bg-white hover:text-colorBlue transition-all duration-300" href="/equiposusados">Te invitamos a ver todas nuestras industrias</a>
      </div>
    )
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className={`w-full flex flex-col md:mt-0 py-10 justify-center items-center gap-4 md:p-5 ${pay ? 'noseeForm' : ''}`}>
      {!pay && <h1 className="text-colorBlue text-3xl font-bold">Estimado Cliente</h1>}
      {
        pay
          ?
          <p className="w-full md:w-[60%] px-4 md:px-0 text-gray-500 text-center">
            Con Fainox Group SAS, vender tus productos y maquinaria es fácil y seguro. Nos enfocamos en brindarte un proceso transparente y confiable, conectándote con los compradores adecuados. Confía en nuestra experiencia y deja que te ayudemos a obtener el mejor valor.
          </p>
          :
          <p className="text-md text-gray-500 pb-4 text-center">
            Si requiere ampliar información sobre nuestros productos o tiene algún proyecto de desarrollo en el que necesite asesoría ..CONTACTENOS sin ningún COMPROMISO, Un asesor se comunicara con usted
          </p>
      }

      {pay && <p className="text-colorBlue px-4 md:px-0 my-5 text-center">Por favor llena el siguiente formulario para ponernos en contacto contigo, recuerda tener una foto de tu producto o maquinaria</p>}

      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-xl font-bold" htmlFor="input">Nombre</label>
          <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Nombre" type="text" name="name" id="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Apellido</label>
          <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Apellido" type="text" name="lastname" id="lastname" required />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10">

        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Correo Electronico</label>
          <input className="p-2 w-[250px] md:w-[300px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Correo Electronico" type="email" name="email" id="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Celular</label>
          <input className="p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Numero de Celular" type="phone" name="phone" id="phone" required />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Dirección</label>
        <input className="p-2 w-[250px] md:w-[540px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Dirreción" type="text" name="address" id="address" required />
      </div>

      <div className="h-full flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Municipio</label>
          <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Municipio" name="minucipio" id="minucipio" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Ciudad</label>
          <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Ciudad" name="city" id="city" required />
        </div>
      </div>
      {
        pay &&
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-xl font-bold" htmlFor="input">Equipo</label>
            <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Nombre del Equipo" type="text" name="product" id="product" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg font-bold" htmlFor="input">Imagen</label>
            <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="file" accept="image/*" name="image" id="image" required />
          </div>
        </div>
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
              {pay ? "Enviar" : "Contactar"}
            </p>
        }
      </button>
    </form>
  )
}