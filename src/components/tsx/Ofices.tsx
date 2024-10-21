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
    console.log(currentOffice)
    const updateImage = () => {
      console.log(currentOffice)
      setCurrentOffice((prevData) => (prevData + 1) % offices.length)
    }

    const interval = setInterval(updateImage, 5000)

    return () => clearInterval(interval)
  }, [currentOffice])

  return (
    <section className="w-full px-20 h-auto flex flex-col-reverse md:flex-row justify-around items-center">


      <div className="w-full md:w-[45%] flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center w-full h-[350px] object-cover">
          <img
            className="w-full h-full object-cover rounded-md shadow-box-black"
            src={offices[currentOffice].image}
            alt={offices[currentOffice].place}
          />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5" >
          {
            offices.map((office, index) => (
              <div
                onClick={() => setCurrentOffice(index)}
                className={`flex flex-col justify-center items-center text-center py-2 px-4
                            cursor-pointer ${currentOffice === index && "bg-blue-950 text-white rounded-xl shadow-box-black"}`}>
                <h3 className="font-bold">{office.name}</h3>
                <p className="font-semibold">{office.place}</p>
                <p className="">{office.phone}</p>
                <p className="">{office.address}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="h-auto w-[500px]">
          <FormContact />
        </div>
        <ListCotizacion />
      </div>




    </section>
  )
}
