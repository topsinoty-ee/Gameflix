import React from "react"

const Card = (props) => {
  let array = props.src
  return array.map((card) => {

    return (
      // DO NOT CHANGE OR MODIFY 'card'. IT IS AN ESSENTIAL HOOK FOR THE FILTER
      <div>
        <div>
          <img src={card.src} alt={card.title} />
        </div>

        <div>
          <h3>{card.title}</h3>
          {/* taglist */}
          <ul>
            {card.tags.map((selected) => {
              const keyVal = `${card.title}-tag${selected.id}`
              return (
                <li key={keyVal}>
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