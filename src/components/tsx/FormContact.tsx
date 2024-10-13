import type React from "react"

export default function FormContact() {

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fields = Object.fromEntries( new window.FormData(event.target))
    console.log(fields)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full h-auto flex flex-col justify-center items-start gap-4 p-5">
      <h1 className="text-colorBlue text-3xl font-bold">Datos de Contacto</h1>
      <p className="text-xl pb-4">Por favor ingresa todos tus datos para poder ser contactado por uno de nuestros Asesores</p>
      <div className="flex flex-row gap-10 text-colorBlue">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-xl font-bold" htmlFor="input">Nombre</label>
          <input className="p-2 w-[400px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="name" id="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Apellido</label>
          <input className="p-2 w-[400px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="lastname" id="lastname" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Correo Electronico</label>
        <input className="p-2 w-[600px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="email" name="email" id="email" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Direccion</label>
        <input className="p-2 w-[800px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="address" id="address" required />
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Municipio</label>
          <input className="p-2 w-[250px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="minucipio" id="minucipio" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Ciudad</label>
          <input className="p-2 w-[250px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="city" id="city" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 text-lg font-bold" htmlFor="input">Bario</label>
          <input className="p-2 w-[250px] border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" name="barrio" id="barrio" required />
        </div>
      </div>
      <button className="relative group cursor-pointer mt-5 text-sky-50 overflow-hidden h-16 w-64 rounded-3xl shadow-box-black bg-sky-800 p-2 flex justify-center items-center font-extrabold">
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
        <p className="z-10 text-2xl font-bold">Contactar</p>
      </button>


    </form>
  )
}