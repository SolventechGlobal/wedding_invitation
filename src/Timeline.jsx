export const Timeline = () => {
    const items = [
    {
        time: "3:30 PM",
        title: "INICIO DEL EVENTO",
        description:
            "Se abren puertas, se acomodan corazones y empieza la cuenta regresiva del amor.",
        image: "/illus-1.png",
    },
    {
        time: "4:00 PM",
        title: "CEREMONIA",
        description:
            "Lágrimas bonitas, miradas eternas y un “sí” que lo cambia todo.",
        image: "/illus-2.png",
    },
    {
        time: "5:00 PM",
        title: "BIENVENIDA Y CÓCTEL",
        description: "Saludos, chismecito y brindis de calentamiento.",
        image: "/illus-3.png",
    },
    {
        time: "6:30 PM",
        title: "ENTRADA DE LOS NOVIOS",
        description:
            "El primer baile con sello de película marca el inicio de la celebración.",
        image: "/illus-4.png",
    },
    {
        time: "7:00 PM",
        title: "BRINDIS",
        description:
            "Copas arriba por el amor, por la vida y por la fiesta que se viene.",
        image: "/illus-5.png",
    },
    {
        time: "7:30 PM",
        title: "CENA",
        description:
            "Hora de comer rico, recargar energía y planear el primer baile estratégico.",
        image: "/illus-6.png",
    },
    {
        time: "8:30 PM",
        title: "FIESTA",
        description:
            "Se sueltan los pasos prohibidos, se rompe el protocolo y se enciende la noche.",
        image: "/illus-7.png",
    },
    {
        time: "2:00 AM",
        title: "FIN DEL EVENTO",
        description:
            "Se apagan las luces, pero el amor sigue de after.",
        image: "/illus-8.png",
    }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 text-[#6B6761]">
            <div className="w-full flex flex-col items-center mb-16 px-4">
                <h2 className="self-center tracking-[7%] text-[1.7rem] md:text-[2.6rem]">
                NUESTRO GRAN DÍA
                </h2>
            </div>
            
        <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-36.5 md:left-56 top-18 bottom-0 w-1 bg-gray-600 h-[91.5%]" />

            <div className="flex flex-col gap-15 md:gap-20">
            {items.map((item, index) => (
                <div key={index} className="flex gap-10 relative items-center">
                    {/* Imagen */}
                    <div className="size-30 md:size-40 shrink-0">
                        <img src={item.image}
                            loading="lazy"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Punto */}
                    <div className="absolute left-35 top-16 md:left-54.5 md:top-17">
                        <div className="w-4 h-4 rounded-full bg-gray-600" />
                    </div>

                    {/* Texto */}
                    <div className="pl-5 md:pl-20">
                        <p className="text-xl font-medium tracking-wide">
                        {item.time} - {item.title}
                        </p>
                        <p className="font-light text-lg max-w-md">
                        {item.description}
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Timeline;