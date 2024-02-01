import { proj } from "../../../constants/projects.js";
import { project } from "../../../assets";

const Projects = () => {
    return (
        <div>
            <img src={project} className="ml-8 h-12 my-16 z-20" />
            <div className="grid grid-flow-row-dense sm:grid-cols-3 grid-cols-1 w-3/5 mx-auto gap-6">
                {proj.map((bobble) => (
                    <div
                        key={bobble.id}
                        className={`${
                            bobble.ploppiness
                                ? "sm:col-span-2 col-span-1 sm:row-span-2 row-span-1"
                                : "col-span-1 row-span-1"
                        } bg-[#000000] flex flex-col w-full mx-auto rounded-md overflow-hidden`}
                    >
                        <a href={bobble.link} className="w-full h-full">
                            <img
                                src={bobble.thumbnail}
                                className="hover:scale-[1.15] transition duration-[400ms] ease-in-out w-full h-full object-cover cursor-pointer"
                            />
                        </a>

                        <div
                            className={`z-50 grow-0 w-full flex flex-col justify-center items-start bottom-0 bg-[#201F23] 
                        ${bobble.plopiness ? "text-4xl" : "text-xl"}`}
                        >
                            <span
                                className={`ml-8 inline font-bold text-white py-1 text-3xl pt-8`}
                            >
                                {bobble.name}
                            </span>
                            <span className=" ml-8 italic font-light font-roboto text-[#a1a1a1] tracking-wider py-1 text-sm pb-8">
                                {bobble.technologies.join(" - ")}
                            </span>
                            {/* <span className="inline-block font-light text-white tracking-wider py-1 text-left">
                                {bobble.description}
                            </span> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
