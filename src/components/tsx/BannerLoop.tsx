import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { sectores } from "../../store/industrias";


export default function BannerLoop() {
  return (
    <section className="w-full h-[40vh] md:h-[80vh]">
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
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[100%]"
      >
            {
              sectores.map((sector) => (
                <SwiperSlide
                  className={`w-full h-full`}
                  >
                    <div className="relative w-full h-full">

                      <img src={sector.image} alt={sector.title} className="w-full h-full absolute brightness-50 z-0 top-0 left-0 object-cover" />

                      <a
                        className="w-full h-full absolute z-10 flex flex-col justify-around p-4 md:p-20 text-white"
                        href={sector.link}
                      >
                        <div>
                          <h2 className="text-xl md:text-4xl xl:text-5xl font-bold mb-2 md:mb-6">Industria - {sector.title}</h2>
                          <p className="text-xs md:text-lg lg:text-lg">{sector.description}</p>
                          <ul className="text-xs md:text-xl lg:text-base xl:text-lg p-3 md:p-10 flex flex-wrap justify-between items-center gap-2 md:gap-10 list-disc">
                            {sector.lines.map(line=> (
                              <li className="font-semibold md:font-bold">{line}</li>
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
