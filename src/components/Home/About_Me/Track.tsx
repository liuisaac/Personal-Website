import Cards from "./Cards";

const Track = () => {
  return (
    <div className='grid grid-cols-8 grid-rows-1 place-content-around justify-center w-[400vh]'>
        <div className="flex flex-row items-center justify-center rotate-12"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Stats.svg'}/></div>
        <div className="flex flex-row items-center justify-center rotate-3 -mt-8"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Activities.svg'}/></div>
        <div className="flex flex-row items-center justify-center rotate-6 mt-8"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Clubs.svg'}/></div>
        <div className="flex flex-row items-center justify-center -rotate-12"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Music.svg'}/></div>
        <div className="flex flex-row items-center justify-center rotate-12"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Education.svg'}/></div>
        <div className="flex flex-row items-center justify-center -rotate-2 -mt-8"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Interests.svg'}/></div>
        <div className="flex flex-row items-center justify-center -rotate-12 mt-8"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Favorites.svg'}/></div>
        <div className="flex flex-row items-center justify-center rotate-6"><Cards bgImage={'../src/assets/Home/About_Me/Cards/Resume.svg'}/></div>
    </div>
  )
}

export default Track