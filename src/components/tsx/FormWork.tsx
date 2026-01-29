export default function FormWork() {
  return (
    <div className="max-w-3xl mt-5">
      <div className="
        relative
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        border border-blue-300
        rounded-2xl
        shadow-lg
        p-8 md:p-10
        flex flex-col gap-4
      ">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-xl font-bold" htmlFor="input">Nombre *</label>
              <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Nombre completo" type="text" name="name" id="name" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-lg font-bold" htmlFor="input">Celular *</label>
              <input className="p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Numero de Celular" type="phone" name="phone" id="phone" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg font-bold" htmlFor="input">Correo Electronico *</label>
            <input className="p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Correo Electronico" type="email" name="email" id="email" required />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-lg font-bold" htmlFor="input">Ciudad</label>
              <input className="p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Ciudad" type="text" name="city" id="city" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-lg font-bold" htmlFor="input">Pais</label>
              <input className="p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Pais" type="text" name="country" id="country" required />
            </div>
          </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 text-lg font-bold" htmlFor="input">Actividad</label>
              <input className="p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Actividad o sector" type="text" name="activity" id="activity" required />
            </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg font-bold" htmlFor="input">Comentarios</label>
            <textarea className="p-2 w-full border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Cuéntenos brevemente su interés" name="comments" id="comments" rows={4} />
          </div>
      </div>
    </div>

  )
}