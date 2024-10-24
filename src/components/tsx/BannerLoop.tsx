import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { sectores } from "../../store/industrias";


export default function BannerLoop() {
  return (
    <section className="w-full h-[80vh]">
      <Swiper
        slidesPerView={1}
        spaceBetween={4}
        loop={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[100%]"
      >
            {
              sectores.map((sector, index) => (
                <SwiperSlide
                  className={`w-full h-full`}
                  >
                    <div className="relative w-full h-full">

                      <img src={sector.image} alt={sector.title} className="w-full h-full absolute brightness-50 z-0 top-0 left-0 object-cover" />

                      <a
                        className="w-full h-full absolute z-10 flex flex-col justify-around p-20 text-white"
                        href={sector.link}
                      >
                        <div>
                          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold mb-6">Industria - {sector.title}</h2>
                          <p className="md:text-md lg:text-lg">{sector.description}</p>
                          <ul className="md:text-md lg:text-base xl:text-lg p-10 flex flex-wrap gap-10 list-disc">
                            {sector.lines.map(line=> (
                              <li>{line}</li>
                            ))}
                          </ul>
                        </div>

                        {/* <div className="w-full h-28 flex flex-row justify-end">
                            {
                              sector.imagesProducts.map(image => (
                                <img className="w-36 h-36 drop-shadow-drop-white" src={image} alt="Esto es un producto" />
                              ))
                            }
                        </div> */}

                      </a>
                    </div>
                </SwiperSlide>
              ))
        }
      </Swiper>
    </section>
  )
}
