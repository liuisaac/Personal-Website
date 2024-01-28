import { Stats, Activities, Clubs, Music, Education, Interests, Favorites, Resume } from "../../../../assets";
import Cards from "./Cards";
const Track = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-1 place-content-around justify-center w-[400vh]'>
        <div className="flex flex-row items-center justify-center rotate-12 mt-24"><Cards bgImage={Stats}/></div>
        <div className="flex flex-row items-center justify-center rotate-3 mt-24"><Cards bgImage={Activities}/></div>
        <div className="flex flex-row items-center justify-center rotate-6 mt-24"><Cards bgImage={Clubs}/></div>
        <div className="flex flex-row items-center justify-center -rotate-12 mt-24"><Cards bgImage={Music}/></div>
        <div className="flex flex-row items-center justify-center rotate-12 mt-24"><Cards bgImage={Education}/></div>
        <div className="flex flex-row items-center justify-center -rotate-2 mt-24"><Cards bgImage={Interests}/></div>
        <div className="flex flex-row items-center justify-center -rotate-12 mt-24"><Cards bgImage={Favorites}/></div>
        <div className="flex flex-row items-center justify-center rotate-6 mt-24"><Cards bgImage={Resume}/></div>
    </div>
  )
}

export default Track