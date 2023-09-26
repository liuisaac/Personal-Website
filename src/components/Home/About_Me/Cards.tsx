

const Cards = ({bgImage} : {bgImage : string}) => {
  return (
    <div className="hover:opacity-60 hover:cursor-pointer transition ease-in-out duration-200">
        <img src={bgImage} className="border-8 border-black h-[28rem]"/>
        </div>
  )
}

export default Cards