

export const Mapa = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-4 text-[#6B6761]">
            <h2 className="mb-2 font-normal text-[2rem] md:text-[2.6rem] tracking-wider">UBICACIÓN</h2>
            <h4 className="text-2xl mb-10 font-light">Santa Monica, Antioquia</h4>
            <img src="/casa.png" className="w-200 h-fit"/>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0963957425597!2d-75.44655039999999!3d6.117725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469bf7649aed13%3A0x13b9b96704e9674!2sSANTAMONICA%20PREMIUM%20LLANOGRANDE%20-%20FINCA%20LA%20MANUELA!5e0!3m2!1ses-419!2sco!4v1768342456464!5m2!1ses-419!2sco"
                className="w-200 h-100 max-w-full mt-4 rounded-lg shadow-lg"
            />
        </div>
    )
}