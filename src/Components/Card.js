import React from "react"

const Card = (props) => {
    let array = props.src
    return array.map((card) => {

      return (
        // DO NOT CHANGE OR MODIFY 'card'. IT IS AN ESSENTIAL HOOK FOR THE FILTER
        <div className="card flex flex-col shadow-black shadow-sm rounded-sm hover:shadow-black hover:shadow-md hover:transition hover:cursor-pointer select-none max-h-[420px]">
          <div>
            <img src={card.src} alt={card.title} className=''/>
          </div>

          <div className='p-3 flex flex-grow flex-col place-content-between content-between justify-between gap-3'>
            <h3 className='text-xl font-bold select-auto'>{card.title}</h3>
            {/* taglist */}
            <ul className='flex space-x-1'>
              {card.tags.map((selected) => {
                const keyVal = `${card.title}-tag${selected.id}`
                return (
                  <li
                  className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold p-2 rounded-2xl max-h-6 flex text-center items-center place-content-center content-center justify-items-center text-[1vw]'
                    key={keyVal}
                  >
                    {selected.tag}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    })
  }
  export default Card