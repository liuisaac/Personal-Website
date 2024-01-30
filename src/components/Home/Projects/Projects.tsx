import { proj } from "../../../constants/projects.js";
import { project } from "../../../assets";

const Projects = () => {
    return (
        <div>
            <img src={project} className="ml-8 h-12 my-16 z-20" />
            <div className="grid grid-flow-row-dense sm:grid-cols-3 grid-cols-1 w-3/5 mx-auto gap-5">
                {proj.map((bobble) => (
                    <div
                        key={bobble.id}
                        className={`${
                            bobble.ploppiness ? "sm:col-span-2 col-span-1 sm:row-span-2 row-span-1" : "col-span-1 row-span-1"
                        } bg-[#201F23] flex flex-col w-full mx-auto mt-12 rounded-xl h-full overflow-hidden`}
                    >
                        <img src={bobble.thumbnail} className="hover:scale-105 transition duration-400 ease-in-out" />
                        <span className=" inline font-semibold font-roboto text-white tracking-wider py-1 text-xl ">
                            {bobble.name}
                        </span>
                        <span className=" inline font-semibold font-roboto text-[#3EFFDC] tracking-wider py-1 text-sm ">
                            {bobble.technologies.join(" - ")}
                        </span>
                        <span className=" inline-block font-light font-roboto text-white tracking-wider py-1 text-sm">
                            {bobble.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
