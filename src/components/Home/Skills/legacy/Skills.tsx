import { primary, additional, skills, skillstack } from "../../../../assets/index.js";
import { prim, addi } from "../../../../constants/read.js";

const Skills = () => {
    return (
        <div className="relative w-screen h-[90vh] bg-[#F7F9F9] text-black">
            <div className="absolute mt-[30vh] ml-[20vh] z-10">
                <img src={skillstack} className="scale-[2.5]" />
            </div>
            <div className="absolute w-screen h-full bg-white bg-opacity-60 backdrop-blur-[4px] z-20 flex flex-col">
                <div className="w-full h-[10vh] mt-[5vh]">
                    <img src={skills} className="ml-8 h-12" />
                </div>
                <div className="w-screen flex flex-row justify-left items-center ml-8">
                    <img src={primary} className="h-10" />
                </div>
                <div className="w-screen flex flex-wrap gap-2 justify-center items-center">
                    <div className="w-4/5 flex flex-wrap gap-2 mt-8">
                        {prim.map((bubble, index) => (
                            <span
                                key={index}
                                className=" inline bg-[#e63b40] border-2 border-red-500 rounded-full px-4 font-semibold font-roboto text-white tracking-wider py-1 hover:scale-125"
                            >
                                {bubble.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-screen flex flex-row justify-left items-center mt-[10vh] ml-8">
                    <img src={additional} className="h-10" />
                </div>
                <div className="w-screen flex flex-wrap gap-2 justify-center items-center">
                    <div className="w-4/5 flex flex-wrap gap-2 mt-8">
                        {addi.map((bubble, index) => (
                            <span
                                key={index}
                                className=" inline bg-[#507aed] border-2 border-blue-500 rounded-full px-4 font-semibold font-roboto text-white tracking-wider py-1"
                            >
                                {bubble.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
