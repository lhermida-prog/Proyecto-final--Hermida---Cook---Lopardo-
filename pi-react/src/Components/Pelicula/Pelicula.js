import React from "react";

function Pelicula() {
    let Etiquetas2 = [
        {imagen : "https://image.tmdb.org/t/p/w500/tzrJulItjttxzoX0t3B2My46TS7.jpg",
        title : "The Thursday Murder Club",
        text : "A group of senior sleuths passionate about solving cold cases get plunged intoa real-life murder mystery in this comic crime caper.",
        emote : "🩶"
        },
        {imagen : "https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",
        title : "F1",
        text : "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
        emote : "♥️"
        },
        {imagen : "https://image.tmdb.org/t/p/w500/A06yXys3hrCWu8xiNoHCFLTG5SH.jpg",
        title : "I Know What You Did Last Summer",
        text : "When five friends inadvertently cause a deadly car accident, they cover up their involvement and make a pact to keep it a secret rather than face the consequences. A year later, their past comes back to haunt them and they're forced to confront a horrifying truth: someone knows what they did last summer…and is hell-bent on revenge.",
        emote : "♥️"
        }, 
        {imagen : "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
        title : "Superman",
        text : "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
        emote : "♥️"
        }
  ]
  return (
    <React.Fragment>
        <h2 className="alert alert-primary">Popular movies this week</h2>
        <section className="row cards" id="movies">
        {Etiquetas2.map(item=>{
        <article class="single-card-movie">
            <img src={item.imagen} class="card-img-top" alt="..."/>
            <div class="cardBody">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text"> {item.text}</p>
                <a href="movie.html" class="btn btn-primary">Ver más</a>
                <a href="" class="btn alert-primary">{item.emote}</a>
            </div>
        </article>
        })}
        </section>
    </React.Fragment>
  )}


export default Pelicula