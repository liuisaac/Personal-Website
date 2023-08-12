import { useState } from "react";
import { Hero } from "../components/Home";

const Home = () => {
  const [ScrollPosition, setScrollPosition] = useState<number>(0);
  return (
    <div className="bg-primary w-screen h-screen">
      <div className="flex flex-col items-center justify-center text-center text-white">
        <div className={"bg-primary w-screen h-screen"}>
          <Hero ScrollPosition={ScrollPosition} SScrollPosition={setScrollPosition}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
