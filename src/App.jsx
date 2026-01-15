import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { lazy, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import InitialLoader from "./InitialLoader";

const Calendar = lazy(() => import("./Calendar"));
const ImagesDisplay = lazy(() => import("./images"));
const Mapa = lazy(() => import("./Mapa"));
const Formulario = lazy(() => import("./Formulario"));
const Timeline = lazy(() => import("./Timeline"));


function App() {
  const isDesktop = useMediaQuery({
      query: '(min-width: 768px)'
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <InitialLoader />
      ): (
      <div className="relative min-h-screen">
        {/* Background Overlay */}
        <div className="bg-[url('/overlay.webp')] absolute inset-0 opacity-5 z-0 bg-repeat w-auto"></div>
      
        {/* Content */}
        <div className="relative inset-0 z-10 flex flex-col items-center">

          {/* Casa */}
          {isDesktop ? (
            <ParallaxBanner className="w-full md:min-h-dvh m-0 hidden md:block">
              <ParallaxBannerLayer speed={10} style={{ zIndex: 0 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/cielo.webp" alt="Cielo" className="w-full mt-20" preload="auto"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={-5} style={{ zIndex: 1 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/nubes.webp" preload="auto" alt="Nubes" className="lg:mt-40 mt-35"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={-10} style={{ zIndex: 5 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/marco_flores.webp" preload="auto" alt="Marco Flores" className="mt-20"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={-20} style={{ zIndex: 1 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/arboles_fondo2.webp" preload="auto" alt="Arboles" className="mt-35 lg:mt-30"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={-10} style={{ zIndex: 4 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/bamboo.webp" preload="auto" alt="Bamboo" className="lg:mt-15"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={5} style={{ zIndex: 3 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/camino2.webp" preload="auto" alt="Camino" className="lg:mt-50 mt-35"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={5} style={{ zIndex: 3 }}>
                <img src="https://archivos.solventechglobal.com/weeding-assets/casa_pintada.webp" preload="auto" alt="Casa" className="lg:mt-50 mt-35"/>
              </ParallaxBannerLayer>

              <ParallaxBannerLayer speed={-25} style={{ zIndex: 1 }}>
                <h1 className="lg:text-8xl text-5xl font-Bellisia text-center lg:mt-120 mt-90">Alberto & Yissel</h1>
              </ParallaxBannerLayer>
            </ParallaxBanner>
          ) : null }

          {/* Casa Mobile */}
          <div className="w-full min-h-fit m-0 md:hidden relative">
            <img src="/casa_movil.png" alt="Casa Mobile" className="w-full h-70" loading="lazy" decoding="async"/>
            <h1 className="w-full text-4xl font-Bellisia text-center absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Alberto & Yissel</h1>
          </div>

          <Parallax speed={5} style={{ zIndex: 4 }}>
            <img src="https://archivos.solventechglobal.com/weeding-assets/flores_transicion.webp" 
              alt="Flores Transicion" 
              className="w-full z-20 -mt-5 sm:-mt-40"/>
          </Parallax>

          {/* Calendario */ }

          <Suspense fallback={<div className="my-16">Cargando...</div>}>
            <Calendar targetDate="2026-06-07T19:15:00" />
          </Suspense>

          <img src="/divider.png" alt="Divider" className="my-16"/>

          <div className="text-[#6B6761] flex flex-col items-center px-4 w-full">
            <h2 className="mb-10 tracking-[7%] text-[1.7rem] md:text-[2.6rem]">NUESTRA HISTORIA</h2>
            <p className="text-xl max-w-6xl px-4 mb-6 text-justify font-light">
              Un amor que inició aquel 10 de agosto de 2019. 
              Fuimos afortunados de que Dios nos encontrara en el mismo lugar y nos guiara para construir un amor sólido, fiel y perseverante. 
              Hoy ya son 6 años llenos de incontables momentos de felicidad. Con el tiempo hemos aprendido a entendernos, a complementarnos 
              y a crecer juntos; junto a nuestra familia, nuestras mascotas y nuestros amigos, hemos construido un hogar amoroso, cálido y feliz, 
              donde todos son recibidos con cariño. Por eso, hemos decidido compartir con ustedes, las personas que amamos, 
              este día tan especial para nosotros.
            </p>
          </div>

          <img src="/divider.png" alt="Divider" className="my-16"/>

          <Suspense fallback={<div className="my-16">Cargando...</div>}>
            <ImagesDisplay />
          </Suspense>

          <img src="/divider.png" alt="Divider" className="my-16"/>

          <Suspense fallback={<div className="my-16">Cargando...</div>}>
            <Timeline />
          </Suspense>

          <img src="/divider.png" alt="Divider" className="my-16"/>

          <div className="text-center px-4 text-[#6B6761]">
            <h2 className="mb-10 tracking-wider text-[1.7rem] md:text-[2.6rem]">CÓDIGO DE VESTIMENTA</h2>
            <p className="font-light text-xl max-w-2xl mx-auto px-4"><span className="font-bold">Hombres:</span> Smoking negro.</p>
            <p className="font-light text-xl max-w-2xl mx-auto px-4 mb-6"><span className="font-bold">Mujeres:</span> Vestido formal unicolor</p>
            <p className="font-light text-xl max-w-2xl mx-auto px-4"><span className="font-bold">Se reservan las tonalidades:</span></p>
            <p className="font-light text-xl max-w-2xl mx-auto px-4 mb-6">Blanco, Beige</p>
            <img src="/dresscode.png" loading="lazy" alt="Dress Code" className="my-16 mx-auto"/>

            <div className="flex flex-row justify-center items-center gap-3">
              <img src="/Carta.png" alt="Sobre" className="w-25"/>
              <p className="font-medium text-2xl max-w-2xl">Lluvia de Sobres</p>
            </div>
          </div>

          <img src="/divider.png" alt="Divider" className="my-16"/>
          
          <Suspense fallback={<div className="my-16">Cargando...</div>}>
            <Mapa />
          </Suspense>
          
          <img src="/divider.png" alt="Divider" className="my-16"/>

          <Suspense fallback={<div className="my-16">Cargando...</div>}>
            <Formulario />
          </Suspense>

          <img src="/divider.png" alt="Divider" className="my-16"/>

        {/* Footer */}
        <footer className="w-full m-0 sm:mt-15">
          <div className="relative h-48 w-full">
            {/* Imagen decorativa */}
            <img
              src="/flores_bottom.png"
              alt="Footer Decoration"
              className="w-full h-full object-cover"
            />

            {/* Texto + logo centrados sobre la imagen */}
            <div className="absolute inset-0 flex items-center justify-center h-fit">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm md:text-base font-semibold tracking-wide text-black/80 bg-white/40 px-3 py-1 rounded">
                  Hecho por 
                </span>

                <a
                  href="https://solventechglobal.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ir a Solventech"
                >
                  <img
                    src="/logo.svg"
                    alt="Solventech Logo"
                    className="h-6 md:h-5 w-auto opacity-90 hover:opacity-100 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>

        </div>

      </div>
    )
  );
}

export default App
