import React from 'react';

//Make a function MovieList() that maps through the movie database array from @MJOMA09 and makes a card that is rendered into the DOM

const Movielist = (props) => {
    let array = props.array;
  
    return array.map((m) => {
      //Card
      return (
        <div>
          <div>
            <img src={m.src} alt={m.title} />
          </div>
          <div>
            <h3>
              <span>{m.title}</span>
            </h3>
            {/* tags */}
            <ul>
              {m.tags.map((e) =>{
                return(
                <li>{e.tag}</li>
                  )
              })}
            </ul>
          </div>
        </div>
      );
    });
  };

  export default Movielist;