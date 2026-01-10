import { useState, useEffect } from "react";

export const ImagesDisplay = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        document.body.style.overflow = selectedImage ? "hidden" : "auto";
    }, [selectedImage]);

    const images = [
        "src/assets/1.png",
        "src/assets/3.png",
        "src/assets/6.png",
        "src/assets/4.png",
        "src/assets/7.png",
        "src/assets/2.png",
        "src/assets/5.png",
    ];

    return (
        <>
        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto px-8">

            {/* Imagen grande izquierda */}
            <div className="md:row-span-2 h-fit">
            <Image
                src={images[0]}
                onClick={() => setSelectedImage(images[0])}
                className="h-120"
            />
            </div>

            {/* Imagen superior centro */}
            <div className="self-end">
            <Image
                src={images[1]}
                onClick={() => setSelectedImage(images[1])}
                className="h-80"
            />
            </div>

            {/* Imagen superior derecha */}
            <div>
            <Image
                src={images[2]}
                onClick={() => setSelectedImage(images[2])}
            />
            </div>

            {/* Imagen inferior centro */}
            <div>
            <Image
                src={images[3]}
                onClick={() => setSelectedImage(images[3])}
                className="h-90"
            />
            </div>

            {/* Imagen grande derecha */}
            <div className="md:row-span-2 mt-0 sm:mt-30">
            <Image
                src={images[4]}
                onClick={() => setSelectedImage(images[4])}
                className="h-120"
            />
            </div>

            {/* Imagen inferior izquierda */}
            <div>
            <Image
                src={images[5]}
                onClick={() => setSelectedImage(images[5])}
                className="h-120"
            />
            </div>

            {/* Imagen centro abajo */}
            <div>
            <Image
                src={images[6]}
                onClick={() => setSelectedImage(images[6])}
                className="h-80"
            />
            </div>
        </div>

        {/* MODAL / LIGHTBOX */}
        {selectedImage && (
            <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            >
            {/* Botón cerrar */}
            <button
                className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-70"
                onClick={() => setSelectedImage(null)}
            >
                ✕
            </button>

            {/* Imagen expandida */}
            <img
                src={selectedImage}
                alt=""
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-fadeIn "
                onClick={(e) => e.stopPropagation()}
            />
            </div>
        )}
        </>
    );
    };

    const Image = ({ src, onClick, className = "" }) => (
    <img
        src={src}
        onClick={onClick}
        className={`w-full ${className} object-cover rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]s`}
    />
);
