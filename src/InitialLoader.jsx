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
        
        <div className="relative w-96 h-auto flex items-center justify-center">
            
            {/* --- IMAGEN DEL SOBRE (Base) --- */}
            <div className="relative w-full">
                <img 
                    src="/SOBRE.png" 
                    alt="Sobre base" 
                    className="w-full h-auto opacity-0"
                />
                
                {/* --- TEXTO (El contenido que se anima) --- */}
                <div 
                    className={`absolute inset-0 flex items-center justify-center transition-all
                        ${isOpen 
                        ? 'scale-110 -translate-y-32 delay-700 duration-1000 z-50 opacity-100' 
                        : 'scale-90 translate-y-0 delay-0 z-10 opacity-0'
                        }
                    `}
                >
                    <div className="bg-white shadow-2xl rounded-lg p-8 border-2 border-gray-100">
                        <h2 className="text-2xl md:text-3xl font-Inter text-[#6B6761] text-center">
                            ¡Eres un invitado especial!
                        </h2>
                    </div>
                </div>

                {/* --- SOBRE CERRADO/ABIERTO (Transición) --- */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                        src="/Sobre cerrado.png" 
                        alt="Sobre cerrado" 
                        className={`absolute w-full h-auto transition-opacity duration-700 z-20
                            ${isOpen ? 'opacity-0' : 'opacity-100'}
                        `}
                    />
                    <img 
                        src="/Sobre abierto.png" 
                        alt="Sobre abierto" 
                        className={`absolute w-full h-auto transition-opacity duration-700 z-20
                            ${isOpen ? 'opacity-100' : 'opacity-0'}
                        `}
                    />
                </div>

                {/* --- SELLO A&Y --- */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <img 
                        src="/Sello A&Y.png" 
                        alt="Sello A&Y" 
                        className="max-w-full h-auto drop-shadow-md"
                    />
                </div>
            </div>

        </div>
        </div>
    );
};

export default InitialLoader;