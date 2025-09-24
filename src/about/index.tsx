import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function About() {
    return (
        <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-20 py-16 text-white bg-black">
            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/3">
                {/* Profile Image */}
                <div className="w-40 h-40 md:w-56 md:h-56 bg-white/10 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                    <img src="/me.jpg" style={{ transform: "translateY(50px)" }} />
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 w-full justify-center md:justify-start">
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

                {/* Experience Boxes (Hide on small screens) */}
                <div className="hidden md:flex flex-col w-full space-y-3 mt-6">
                    <div className="flex items-center justify-between p-4 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:scale-[1.02] transition">
                        <div className="flex items-center gap-4">
                            <img src="/logos/citadel.jpg" alt="Citadel" className="w-12 h-12 object-contain" />
                            <div>
                                <p className="text-sm font-semibold">Citadel</p>
                                <p className="text-xs text-white/70">SWE Intern · Summer 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:scale-[1.02] transition">
                        <div className="flex items-center gap-4">
                            <img src="/logos/databricks.jpg" alt="Databricks" className="w-12 h-12 object-contain" />
                            <div>
                                <p className="text-sm font-semibold">Databricks</p>
                                <p className="text-xs text-white/70">SWE Intern · Spring 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:scale-[1.02] transition">
                        <div className="flex items-center gap-4">
                            <img src="/logos/amazon.jpg" alt="Amazon" className="w-12 h-12 object-contain" />
                            <div>
                                <p className="text-sm font-semibold">Amazon</p>
                                <p className="text-xs text-white/70">SDE Intern · Summer 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:scale-[1.02] transition">
                        <div className="flex items-center gap-4">
                            <img src="/logos/gt.png" alt="Georgia Tech" className="w-12 h-12 object-contain" />
                            <div>
                                <p className="text-sm font-semibold">Georgia Tech</p>
                                <p className="text-xs text-white/70">B.S. Computer Science · Aug 2023 - May 2027</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:scale-[1.02] transition">
                        <div className="flex items-center gap-4">
                            <img src="/logos/gt.png" alt="Georgia Tech" className="w-12 h-12 object-contain" />
                            <div>
                                <p className="text-sm font-semibold">Georgia Tech</p>
                                <p className="text-xs text-white/70">B.S. Mathematics · Aug 2023 - May 2027</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="mt-12 md:mt-0 md:ml-16 flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-6">Hi, I’m Ashwin Mudaliar</h1>
                <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>ashwinamudaliar [at] gmail [dot] com</p>
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
