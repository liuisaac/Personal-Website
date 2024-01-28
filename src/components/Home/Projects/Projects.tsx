import { proj } from "../../../constants/projects.js";
import { project } from "../../../assets";

const Projects = () => {
    return (
        <>
            <img src={project} className="ml-8 h-12 mt-16"/>
            {proj.map((bobble, index) => (
                <div
                    className=" w-4/5 mx-auto bg-[#201F23] mt-12 rounded-xl"
                    key={index}
                >
                    <img src={bobble.thumbnail} />
                    <span
                        className=" inline font-semibold font-roboto text-white tracking-wider py-1 text-xl "
                    >
                        {bobble.name}
                    </span>
                    <span
                        className=" inline-block font-semibold font-roboto text-[#3EFFDC] tracking-wider py-1 text-sm "
                    >
                        {bobble.technologies.join(" - ")}
                    </span>
                    <span
                        className=" inline-block font-light font-roboto text-white tracking-wider py-1 text-sm"
                    >
                        {bobble.description}
                    </span>
                </div>
            ))}
        </>
    );
};

export default Projects;
