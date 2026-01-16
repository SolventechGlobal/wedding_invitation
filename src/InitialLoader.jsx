import { useState, useEffect } from 'react';

const InitialLoader = () => {
    const [isOpen, setIsOpen] = useState(false);

    // --- AUTOMATIZACIÓN ---
    useEffect(() => {
        // Iniciar un temporizador cuando el componente se monta
        const timer = setTimeout(() => {
        setIsOpen(true); // Abrir automáticamente
        }, 1300); // Esperar 1.3 segundos (1300ms)

        // Limpieza: si el componente se desmonta antes de que termine el tiempo, limpiamos el timer.
        return () => clearTimeout(timer);
    }, []);


    return (
        // Contenedor principal centrado
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        
        <div className="relative w-72 h-48 bg-gray-400 rounded-b-lg shadow-2xl transition-transform hover:scale-105 mt-20">
            
            {/* --- LA CARTA (El contenido que se anima) --- */}
            <div 
            className={`absolute left-6 right-6 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] text-center flex flex-col items-center justify-center rounded-lg border-2 border-gray-100 h-auto py-8 px-4
                ${isOpen 
                /* ESTADO ABIERTO:
                    scale-[1.8]: Se agranda casi al doble.
                    delay-700: Espera un poco a que la solapa se abra antes de empezar a subir lentamente.
                    z-50: Se asegura de quedar ENCIMA de todo el sobre al final.
                */
                ? 'scale-[1.4] delay-700 duration-1000 z-50 opacity-100' 
                /* ESTADO CERRADO:
                    top-16: Posición inicial dentro del sobre.
                    scale-95: Un poco más pequeña adentro.
                    z-10: Entre la capa trasera y el frente del sobre.
                */
                : 'top-16 scale-95 delay-0 z-10 opacity-0'
                }
            `}
            >

            <div className="font-Inria font-light text-gray-700">
                <h2 className="text-2xl">¡Eres un invitado especial!</h2>
            </div>
            </div>


            {/* --- EL FRENTE DEL SOBRE (Bolsillo inferior) --- */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <div className="border-l-144 border-r-144 border-b-96 border-l-transparent border-r-transparent border-b-gray-300 rounded-b-lg drop-shadow-md"></div>
            </div>
            
            {/* --- LA SOLAPA SUPERIOR --- */}
            {/* He ralentizado un poco la solapa (duration-1000) para que acompañe mejor a la carta lenta */}
            <div className={`absolute top-0 left-0 right-0 z-30 transition-transform duration-1000 ease-in-out origin-top
                ${isOpen ? 'rotate-x-180' : 'rotate-x-0'}
            `}
                style={{ transformStyle: 'preserve-3d' }}
                >
                <div className="border-l-144 border-r-144 border-t-96 border-l-transparent border-r-transparent border-t-gray-300 drop-shadow-md"></div>
                {/* Línea de pliegue */}
                <div className={`absolute top-0 left-0 w-full h-0 border-t border-gray-800 opacity-30 ${isOpen ? 'hidden' : 'block'}`}></div>
            </div>

        </div>
        </div>
    );
};

export default InitialLoader;