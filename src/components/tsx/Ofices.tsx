import { useEffect, useState } from "react";
import FormContact from "./FormContact";
import ListCotizacion from "../cotizacion/listCotizacion";

export default function Offices() {

  const offices = [
    {
      'name': 'Oficina Principal 1',
      'place': 'Zipaquira - Cundinamarca',
      'phone': '+57 3194834763',
      'address': 'Calle 6 Sur # 24 - 57',
      'image': '/offices/office1.jpg'
    },
    {
      'name': 'Oficina Principal 2',
      'place': 'Bogotá',
      'phone': '+57 3005443781',
      'address': 'Carrera 48 # 54 - 45',
      'image': '/offices/office2.jpg'
    },
    {
      'name': 'Oficina Principal 3',
      'place': 'Medellin - Antioquia',
      'phone': '+57 3124785612',
      'address': 'Avenida Villavicencia # 45 -75 Local 45',
      'image': '/offices/office3.jpg'
    },
  ];

  const [currentOffice, setCurrentOffice] = useState(1)

  useEffect(() => {
    const updateImage = () => {
      setCurrentOffice((prevData) => (prevData + 1) % offices.length)
    }

    const interval = setInterval(updateImage, 5000)

    return () => clearInterval(interval)
  }, [currentOffice])

  return (
    <section className="w-full px-5 md:px-20 h-auto flex flex-col justify-center items-center">
      <div className="flex w-full flex-col xl:flex-row justify-around items-center">
        <ListCotizacion />
        <div className="h-auto w-full xl:w-[40%]">
          <FormContact />
        </div>
      </div>
    </section>
  )
}
