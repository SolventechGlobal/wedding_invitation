import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Calendar from "./Calendar.jsx";
import { ImagesDisplay } from "./images_display.jsx";
import { Mapa } from "./Mapa.jsx";
import { Formulario } from "./Formulario.jsx";

function App() {
  return (
    <div className="relative min-h-screen">

      {/* Background Overlay */}
      <div className="bg-[url('/overlay.png')] absolute inset-0 bg-cover opacity-10 z-0"></div>
      
      {/* Content */}
      <div className="relative inset-0 z-10 flex flex-col items-center">

        {/* Casa */}
        <ParallaxBanner className="w-full md:min-h-dvh m-0 hidden md:block">

          <ParallaxBannerLayer speed={30} style={{ zIndex: 0 }}>
            <img src="/cielo.png" alt="Cielo" className="w-full mt-60"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-5} style={{ zIndex: 1 }}>
            <img src="/nubes.png" alt="Nubes" className="lg:mt-40 mt-35"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-10} style={{ zIndex: 3 }}>
            <img src="/marco_flores.png" alt="Marco Flores" className="mt-20"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-20} style={{ zIndex: 1 }}>
            <img src="/arboles_fondo.png" alt="Arboles" className="mt-30"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-10} style={{ zIndex: 2 }}>
            <img src="/bamboo.png" alt="Bamboo" className="lg:mt-15"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={5} style={{ zIndex: 3 }}>
            <img src="/camino.png" alt="Casa" className="lg:mt-50 mt-20"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={5} style={{ zIndex: 3 }}>
            <img src="/casa_pintada.png" alt="Casa" className="lg:mt-50 mt-20"/>
          </ParallaxBannerLayer>

          <ParallaxBannerLayer speed={-25} style={{ zIndex: 1 }}>
            <h1 className="lg:text-9xl text-6xl font-Gwendolyn text-center lg:mt-120 mt-90">Alberto & Yissel</h1>
          </ParallaxBannerLayer>
        </ParallaxBanner>

        {/* Casa Mobile */}
        <div className="w-full min-h-fit m-0 md:hidden relative">
          <img src="/casa_movil.png" alt="Casa Mobile" className="w-full h-70"/>
          <h1 className="w-full text-5xl font-Gwendolyn text-center absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Alberto & Yissel</h1>
        </div>

        <Parallax speed={5} style={{ zIndex: 3 }}>
          <img src="/flores_transicion.png" 
            alt="Flores Transicion" 
            className="w-full z-20 -mt-5 sm:-mt-40"/>
        </Parallax>

        {/* Calendario */ }
        <Calendar targetDate="2026-06-07T16:00:00" />

        <img src="/divider.png" alt="Divider" className="my-16"/>

        <ImagesDisplay />

        <img src="/divider.png" alt="Divider" className="my-16"/>

        <Mapa />

        <img src="/divider.png" alt="Divider" className="my-16"/>

        <div className="text-center px-4 text-[#6B6761]">
          <h2 className="font-bold text-4xl mb-10 tracking-widest">CÓDIGO DE VESTIMENTA</h2>
          <p className="text-xl max-w-2xl mx-auto px-4"><strong>Hombres:</strong> Smoking negro.</p>
          <p className="text-xl max-w-2xl mx-auto px-4 mb-6"><strong>Mujeres:</strong> Vestido formal unicolor</p>
          <p className="text-xl font-bold max-w-2xl mx-auto px-4">Se reservan las tonalidades:</p>
          <p className="text-xl max-w-2xl mx-auto px-4 mb-6">Blanco, Beige</p>
          <img src="/dresscode.png" alt="Divider" className="my-16 mx-auto"/>
        </div>
        
        <img src="/divider.png" alt="Divider" className="my-16"/>

        <Formulario />

        <img src="/divider.png" alt="Divider"/>

        {/* Footer */}
        <div className="h-48 w-full m-0 sm:mt-15">
          <img src="/flores_bottom.png" alt="Footer Decoration" className="w-full h-full object-cover hidden md:block" />
          <img src="/flores_bottom.png" alt="Footer Decoration Mobile" className="w-fit h-full object-cover md:hidden" />
        </div>
      </div>

    </div>
  )
}

export default App
