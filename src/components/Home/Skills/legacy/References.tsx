import { dont, quote, justin } from "../../../../assets";
const References = () => {
    return (
        <div className="bg-[#F7F9F9] w-full h-full relative">
            <div className="bg-white bg-opacity-60 backdrop-blur-[4px] absolute w-screen h-full">
                <div className="w-full h-[10vh] pt-[5vh] z-10">
                    <img src={dont} className="ml-8 h-12" />
                    <span className="text-black z-10 w-screen italic text-wrap text-[12px]">
                        Here are some impressions from someone I've worked
                        closely with!
                    </span>
                    <div className="mx-auto w-4/5 rounded-[2rem] border-4 h-[50vh] mt-8 bg-white bg-opacity-60 backdrop-blur-xl">
                        <div className="flex flex-row w-full justify-center items-center h-16 mt-4">
                            <div className="w-1/2 flex flex-row justify-start items-center h-full">
                                <img src={quote} className="h-1/2 ml-8" />
                            </div>
                            <div className="w-1/2 flex flex-row justify-end items-center h-full">
                                <img src={justin} className="h-full mr-8" />
                            </div>
                        </div>
                        <div className="w-4/5 mx-auto text-left text-sm mt-4">
                            <span className="text-[#272727] w-4/5">
                                Isaac is extremely talented in Full Stack
                                development. His impact in leading the website
                                for Canada's largest robotics tournament is
                                something I would've expected from a full CS
                                graduate. His work is beyond satisfactory, and
                                his time management and response time is
                                excellent. As a result of his work, we have been
                                able to bring in more attention and present
                                Mecha Mayhem to the world at a professional
                                quality. I highly recommend Isaac for any full
                                stack development.
                            </span>
                            <span className="text-black font-bold inline-block mt-4 text-xl">
                                {`- Justin Zhou`}
                            </span>
                            <div>
                                <span className="text-black font-light italic inline mt-4 text-sm">
                                    {`Founder of Western Mechatronics Robotics, Event Organizer for Mecha Mayhem`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default References;
