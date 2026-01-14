import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();

            if (difference <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };
            }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="w-full h-fit flex flex-col items-center justify-center px-4 mt-10">
            
            {/* TEXTO */}
            <Parallax speed={8}>
            <div className="text-center px-4 mb-8">
                <h2 className="font-normal text-[1.7rem] md:text-[2.6rem] tracking-wider text-[#6b6762] mb-1">
                    CUENTA REGRESIVA
                </h2>
                <p className="font-light text-xl md:text-2xl text-[#8a867f]">
                    para el día más especial de nuestras vidas
                </p>
            </div>
            </Parallax>


            {/* CARDS */}
            <Parallax speed={10}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 max-w-4xl w-full mb-20 px-6">
                    <CountdownCard value={timeLeft.days} label="DÍAS" />
                    <CountdownCard value={timeLeft.hours} label="HORAS" />
                    <CountdownCard value={timeLeft.minutes} label="MINUTOS" />
                    <CountdownCard value={timeLeft.seconds} label="SEGUNDOS" />
                </div>
                <p className="font-light text-center text-2xl text-[#8a867f]">7 de Junio, 2026</p>
            </Parallax>
        </div>
    );
};

const CountdownCard = ({ value, label }) => (
    <div className="w-full aspect-4/3 bg-[#fbfaf8] rounded-xl shadow-md flex flex-col items-center justify-center p-10">
        <span className="text-4xl sm:text-6xl font-medium text-[#6b6762]">
            {value}
        </span>
        <span className="text-sm tracking-widest text-[#8a867f] mt-2">
            {label}
        </span>
    </div>
);

export default Countdown;