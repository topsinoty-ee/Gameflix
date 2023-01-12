import React from 'react'

//Make a function MovieList() that maps through the movie database array from @MJOMA09 and makes a card that is rendered into the DOM

const Movielist = (props) => {
  let array = props.array

  return array.map((card) => {
    //Card
    return (
      <div className="grid grid-rows-[2fr,1fr] border-2 border-black rounded-lg bg-white">
        <div className="flex place-content-center items-center content-center">
          <img src={card.src} alt={card.title} className="object-cover" />
        </div>

        <div className="mx-auto">
          <h3 className="text-xl">{card.title}</h3>
          {/* taglist */}
          <ul className="flex flex-row flex-nowrap first:after:content-['&bull;'] last:before:content-['&bull;']">
            {card.tags.map((selected) => {
              const keyVal = `${card.title}-tag${selected.id}`

              return (
                <li key={keyVal} className="px-1 hover:underline hover:text-blue-800 transition-all duration-300">
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

export default Movielist
