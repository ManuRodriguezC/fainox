export default function FormCotizacion() {
  return <>
    <div className="flex flex-col md:flex-row gap-5 md:gap-10">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-xl font-bold" htmlFor="input">Nombre *</label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Nombre" type="text" name="name" id="name" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Apellido *</label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Apellido" type="text" name="lastname" id="lastname" required />
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-5 md:gap-10">

      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Correo Electronico *</label>
        <input className="p-2 w-[250px] md:w-[300px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Correo Electronico" type="email" name="email" id="email" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Celular *</label>
        <input className="p-2 w-[250px] md:w-[200px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Numero de Celular" type="phone" name="phone" id="phone" required />
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <label className="text-gray-700 text-lg font-bold" htmlFor="input">Dirección *</label>
      <input className="p-2 w-[250px] md:w-[540px] border-[1px] border-gray-400 rounded-lg shadow-box-black" placeholder="Dirreción" type="text" name="address" id="address" required />
    </div>

    <div className="h-full flex flex-col md:flex-row gap-5 md:gap-10">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Empresas <span className="text-xs text-gray-500">- Opcional</span></label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Empresa" name="empresa" id="empresa" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Área <span className="text-xs text-gray-500">- Opcional</span></label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Área" name="area" id="area" />
      </div>
    </div>

    <div className="h-full flex flex-col md:flex-row gap-5 md:gap-10">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Municipio *</label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Municipio" name="minucipio" id="minucipio" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 text-lg font-bold" htmlFor="input">Ciudad *</label>
        <input className="w-[250px] p-2 border-[1px] border-gray-400 rounded-lg shadow-box-black" type="text" placeholder="Ciudad" name="city" id="city" required />
      </div>
    </div>
  </>
}