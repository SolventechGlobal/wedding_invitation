
const Formulario = () => {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center p-4 text-[#6B6761]">
            <h2 className="mb-2 text-center font-normal text-[1.7rem] md:text-[2.6rem] tracking-wider">CONFIRMA TU ASISTENCIA</h2>
            <h4 className="text-2xl mb-10 text-center font-light">¡Esperamos contar contigo!</h4>
            <iframe src="https://forms.gle/bw2yhwTtiGBtCmYFA" 
                className="w-[80%] h-150 mt-4 rounded-lg shadow-lg m-10 mx-30" 
            />
        </div>
    )
}

export default Formulario;