import React, { useState, useEffect } from 'react';
import './global.scss';

function App() {
  
   const [seachVideo, setSearchVideo]= useState()
   const [filterSearch, setFilterSearch]= useState()

   useEffect(()=>{
       apiYoutube()
     }
   ,[])

   // API
   const apiYoutube= async ()=> {
    try{
        const url= `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=react&maxresults=20&key=AIzaSyB2qPOWZw7J7GJ5rRjpL_tkfi4shZckQaE`;
      
        const response= await fetch(url)
        const data = await response.json()
        console.log(
            JSON.parse(
                JSON.stringify(
                    Object.assign(data)
        )))
    }catch(error){
        console.log(`API not connect!`)
        console.log(error)
      }   
    }
   // console.log(apiYoutube())
  
   const handleSubmit= (e)=>{ 
     e.preventDefault(); 
     const busca= { video: seachVideo};
     setFilterSearch(busca.video)
   }
   console.log(filterSearch)


  // TEXT result is
  const resultados= [
    {
    id:1,   
    titulo: 'Titulo do Video',
    descricao: 'video sobre?',
    thumb: 'avatar'
    },
    {
      id:2,   
      titulo: 'Titulo do Video 2',
      descricao: 'video sobre',
      thumb: 'avatar 2'
    },
    {
      id:3,   
      titulo: 'Titulo do Video 3',
      descricao: 'video sobre',
      thumb: 'avatar 3'
    },
    {
      id:4,   
      titulo: 'Titulo do Video 4',
      descricao: 'video sobre',
      thumb: 'avatar 4'
    },
    {
      id:5,   
      titulo: 'Titulo do Video 5',
      descricao: 'video sobre',
      thumb: 'avatar 5'
    }
  ]


 const [play, setPlay]= useState()
 const Player= ()=>{
   setPlay('Play')
 }

  return (
    <main>
      <section className="searchContainer">
      <form onSubmit={handleSubmit}>
      <input 
        type="search" 
        name={seachVideo}
        placeholder="Pesquisar vídeo"
        onChange={ e=>setSearchVideo(e.target.value)} 
        /> 
        <button type="submit">search</button>
      </form>
      </section>

      <section className="content">
        <article className="result">
            <h1>Resultados</h1>
            {resultados.map((el)=>{
                   return (
                     <section key={el.id} className="card" onClick={Player}>
                          <div className="cardThumb"> 
                             <h2>{el.thumb}</h2>
                          </div>
                          <div className="cardTitles"> 
                            <h3>{el.titulo}</h3>
                            <h4>{el.descricao}</h4>
                          </div>
                     </section>
                   )
            })}
        
        </article>
        <article className="videoPlay">
          <h2>{play}</h2>
        </article>
      </section>
    </main>
  );
}


export default App;
