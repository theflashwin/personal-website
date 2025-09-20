import Dither from "../components/Dither"
import { FaGithub, FaInfoCircle, FaLinkedin, FaYoutube } from "react-icons/fa"
import { GrDocumentUser } from "react-icons/gr";

const links = [
    {
        name: "About",
        icon: <FaInfoCircle size={28} />,
        link: "/about",
    },
    {
        name: "GitHub",
        icon: <FaGithub size={28} />,
        link: "https://github.com/theflashwin"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={28} />,
        link: "https://www.linkedin.com/in/ashwinmatl/"
    },
    {
        name: "YouTube",
        icon: <FaYoutube size={28} />,
        link: "https://www.youtube.com/@mindmaster098",
    },
    {
        name: "Resume",
        icon: <GrDocumentUser size={28} />,
        link: "/resume.pdf"
    }
]

export default function Home() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Dither
                    waveColor={[0.3, 0.1, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.35}
                    waveFrequency={3}
                    waveSpeed={0.007}
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                {/* Name */}
                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-lg">
                    Ashwin Mudaliar
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed drop-shadow">
                    CS + Math @ Georgia Tech | Incoming IMC Trading, Databricks
                </p>

                {/* Row of glass company icons */}
                <div className="mt-8 flex space-x-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center hover:scale-110 transition"
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
