

export const Mapa = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-4 text-[#6B6761]">
            <h2 className="font-bold text-4xl mb-2 tracking-[0.3em]">UBICACIÓN</h2>
            <h4 className="text-2xl mb-10">Llano Grande, Antioquia</h4>
            <img src="/casa.png" className="w-200 h-fit"/>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.482264283473!2d-75.45440400855934!3d6.122589249077311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469953d1c7c733%3A0xc247b0968d64e877!2sLlano%20Grande%2C%20Rionegro%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1767908320881!5m2!1ses-419!2sus" 
                className="w-200 h-100 max-w-full mt-4 rounded-lg shadow-lg"
            />
        </div>
    )
}