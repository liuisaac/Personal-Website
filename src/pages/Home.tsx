import ProgressBar from "../components/Constant/ProgressBar";
import AnimationCanvas from "../components/Home/Three/AnimationCanvas";
const Home = () => {

  return (
    <div className="bg-primary w-screen h-screen">
      <ProgressBar />
      <div className="flex flex-col items-center justify-center text-center text-white">
        <div className={"bg-primary w-screen h-screen"}>
          <AnimationCanvas/>
        </div>
      </div>
    </div>
  );
};

export default Home;
