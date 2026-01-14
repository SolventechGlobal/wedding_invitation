import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";

export const ImagesDisplay = () => {
    const images = [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
        "/6.png",
        "/7.png",
    ];

    return (
        <div className="w-full overflow-x-hidden">
        <h2 className="font-normal text-[2rem] md:text-[2.6rem] tracking-wider text-center mb-20 text-[#6B6761]">
            NUESTRO COMPROMISO
        </h2>

        {/* MOBILE → SWIPE */}
        <div className="flex sm:hidden h-fit w-full mb-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.4}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                centeredSlides
                className="mx-4 flex sm:hidden w-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}
                        className="sm:hidden w-full h-full flex self-center justify-items-center"
                    >
                        <img
                            src={img}
                            alt=""
                            className="h-100 self-center justify-self-center mx-auto object-cover rounded-2xl pointer-events-none select-none"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/** DESKTOP → GRID */}
        <div className="hidden flex-row justify-center md:flex">
            <div className="flex flex-col px-4 gap-6">
                <Image src={images[0]} className="h-120" />
                <Image src={images[1]} className="h-100" />
            </div>

            <div className="flex flex-col px-4 gap-6">
                <Image src={images[2]} className="h-70" />
                <Image src={images[3]} className="h-90" />
                <Image src={images[4]} className="h-70" />
            </div>

            <div className="flex flex-col px-4 gap-6">
                <Image src={images[5]} className="h-90" />
                <Image src={images[6]} className="h-110" />
            </div>
        </div>
        </div>
    );
};

const Image = ({ src, className = "" }) => (
    <img
        src={src}
        alt=""
        draggable={false}
        className={`w-full ${className} object-cover rounded-2xl select-none pointer-events-none`}
    />
);