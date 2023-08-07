import { Hero, About_Me } from "../components/Home"
const Home = () => {
    return (
        <div className="bg-primary w-screen h-screen">
            <div className="flex flex-col items-center justify-center text-center text-white">
                <div className={'bg-primary w-screen h-screen'}>
                    HI
                    <Hero />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center text-white h-screen">
                <div className={'bg-primary w-screen h-screen'}>
                    HI
                    <About_Me />
                </div>
            </div>
        </div>
    )
}

export default Home