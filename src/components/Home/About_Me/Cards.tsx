

const Cards = ({bgImage} : {bgImage : string}) => {
  return (
    <div className="hover:border-gray-300 hover:drop-shadow-[0_0px_35px_rgba(255,255,255,0.45)] hover:cursor-pointer transition ease-in-out duration-500 border-black border-8">
        <img src={bgImage} className="h-[28rem]"/>
        </div>
  )
}

export default Cards