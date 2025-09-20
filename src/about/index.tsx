import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function About() {
    return (
        <div className="relative w-full min-h-screen flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-16 text-white bg-black">
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/3">
                {/* Profile Image */}
                <div className="w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                    {/* Replace with actual photo */}
                    <img src="/me.jpg" style={{ transform: "translateY(50px)" }} />
                </div>

                {/* Social Links (Glass style) */}
                <div className="flex flex-wrap gap-3 w-full">
                    <a
                        href="https://github.com/theflashwin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition p-2"
                    >
                        <FaGithub size={18} /> github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ashwinmatl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition p-2"
                    >
                        <FaLinkedin size={18} /> linkedin
                    </a>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText("ashwinamudaliar@gmail.com");
                            alert("Email copied to clipboard!");
                        }}
                        href="#"
                        className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition p-2 cursor-pointer"
                    >
                        <FaEnvelope size={18} /> email
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="mt-12 md:mt-0 md:ml-16 flex-1">
                <h1 className="text-3xl font-bold mb-6">Hi, I’m Ashwin Mudaliar</h1>
                <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                    ashwinamudaliar [at] gmail [dot] com
                </p>
                    <p>
                        I’m a student at Georgia Tech studying Computer Science and Mathematics, specializing
                        in Machine Learning, Systems/Architecture, and Pure Mathematics.
                    </p>
                    <p>
                        Previously, I was an SDE Intern at Amazon, and I'm incoming at Databricks as a SWE Intern for Spring 2026.
                    </p>
                    <p>
                        Outside of academics and work, I enjoy football, basketball, and
                        gardening.
                    </p>
                </div>
            </div>
        </div>
    )
}
