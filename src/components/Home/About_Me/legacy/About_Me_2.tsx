import { Add, Code } from "../../../../assets/index.js";
import "../../../index.css";

const About_Me = () => {
    return (
        <div
            className="w-full h-full text-white bg-opacity-20 bg-gradient-to-b from-[#111828] to-[#05080D] flex flex-row justify-center items-start"
            id="aboutMe"
        >
            <div className="w-4/5 flex flex-row">
                <div className="flex flex-col justify-start items-start w-2/3 text-2xl text-gray-400">
                    <div className="mb-8">
                        <span className="font-extrabold text-5xl underline text-white">
                            About_Me
                        </span>
                        <span className="font-extrabold text-5xl text-blue-400">
                            .
                        </span>
                    </div>
                    <div className="text-left flex flex-col w-4/5">
                        <span className="mb-8 font-bold text-gray-300">
                            Hi, I'm Isaac!{" "}
                        </span>
                        <span className="mb-8">
                            I'm an undergraduate Science student at the
                            University of British Columbia in Vancouver, Canada.
                            I work a lot with frontend tools, primarily React
                            and Tailwind, but I love learning and exploring new
                            tools to add to my skillset. As a self-taught and
                            self-motivated problem solver, I thrive on deriving
                            and implementing fresh and innovative solutions to
                            improve my own life and the lives of others.
                        </span>
                        <span className="mb-8">
                            Outside of school, I love making websites and
                            exploring new and interesting website designs. Over
                            this summer, I worked in a team of two to create a
                            website for the largest robotics tournament in
                            Canada, Mecha Mayhem. In my free time, I also love
                            rock climbing and playing acoustic guitar.
                        </span>
                        <span className="font-bold">
                            Let's connect and build something together!
                        </span>
                    </div>
                </div>
                <div className="w-1/3 flex flex-col">
                    <div className="mb-8 mt-20 flex flex-row justify-start items-center">
                        <img src={Code} className="h-10 mr-6 opacity-50 hover:opacity-100 transition-opacity duration-100 ease-in-out" />
                        <span className="font-bold text-3xl text-white">
                            Technical Skills
                        </span>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-4">
                        <div className="w-full flex flex-row items-center justify-start gap-2">
                            <div className="w-28 h-8 bg-[#ff3838] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Python
                                </div>
                            </div>
                            <div className="w-20 h-8 bg-[#ff3838] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Java
                                </div>
                            </div>
                            <div className="w-40 h-8 bg-[#ff3838] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                JavaScript
                                </div>
                            </div>
                            <div className="w-40 h-8 bg-[#ff3838] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                TypeScript
                                </div>
                            </div>
                            <div className="w-20 h-8 bg-[#ff3838] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                C++
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row items-center justify-start gap-2">
                            <div className="w-28 h-8 bg-[#386dff] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                React.js
                                </div>
                            </div>
                            <div className="w-28 h-8 bg-[#386dff] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                HTML
                                </div>
                            </div>
                            <div className="w-28 h-8 bg-[#386dff] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                CSS
                                </div>
                            </div>
                            <div className="w-28 h-8 bg-[#386dff] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Tailwind
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    <div className="mb-8 mt-16 flex flex-row justify-start items-center">
                        <img src={Add} className="h-10 mr-6 opacity-50 hover:opacity-100 transition-opacity duration-100 ease-in-out" />
                        <span className="font-bold text-3xl text-white">
                            Additional Tools
                        </span>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-4">
                        <div className="w-full flex flex-row items-center justify-start gap-2">
                            <div className="w-56 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Three.js / R3F
                                </div>
                            </div>
                            <div className="w-40 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Blender
                                </div>
                            </div>
                            <div className="w-40 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Fusion 360
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row items-center justify-start gap-2">
                            <div className="w-56 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Git / Github
                                </div>
                            </div>
                            <div className="w-28 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Vite
                                </div>
                            </div>
                            <div className="w-56 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Node.js
                                </div>
                            </div>
                            <div className="w-56 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Vercel
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row items-center justify-start gap-2">
                            <div className="w-24 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Figma
                                </div>
                            </div>
                            <div className="w-44 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Cloudflare
                                </div>
                            </div>
                            <div className="w-56 h-8 bg-[#3a3a3a] rounded-full text-gray-300 font-semibold bg-opacity-70 tracking-wider flex flex-row justify-center items-center">
                                <div className="mt-0">
                                Adobe After Effects
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_Me;
