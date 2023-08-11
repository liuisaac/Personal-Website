import { useState, useEffect } from "react";
import { Hero, About_Me } from "../components/Home";

const Home = () => {
  const [ScrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    // console.log(ScrollPosition)
    if (ScrollPosition > 0.3) {
      console.log("Down")
      const divElement = document.getElementById('About_Me');
      if (divElement) {
        divElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [ScrollPosition])

  return (
    <div className="bg-primary w-screen h-screen">
      <div className="flex flex-col items-center justify-center text-center text-white">
        <div className={"bg-primary w-screen h-screen"}>
          <Hero ScrollPosition={ScrollPosition} SScrollPosition={setScrollPosition}/>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center text-white h-screen relative z-10" id="About_Me">
        <div className={"bg-gray-800 w-screen h-screen"}>
          HI
          <About_Me />
        </div>
      </div>
    </div>
  );
};

export default Home;
