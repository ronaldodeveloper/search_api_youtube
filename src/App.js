import React, { useState, useEffect } from 'react';
import youtube from './api/youtube.js'
import './global.scss';

function App() {
  
   const [seachVideo, setSearchVideo]= useState()
   const [filterSearch, setFilterSearch]= useState([])

  useEffect(()=>{
    apiYoutube()
  }
,[])

const apiYoutube= async (video)=> {
  const response= await youtube.get('/search', {
    params: {
      q: video
    }
  })
  setFilterSearch([response.data.items])
}
  
   const handleSubmit= (e)=>{ 
     e.preventDefault(); 
     const busca= { video: seachVideo};
     apiYoutube(busca.video)
   }
  console.log(Object.assign(filterSearch))


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
            {filterSearch.map((el)=>{
             
                   return (
                     <section key={el} className="card" onClick={Player}>
                          <div className="cardThumb"> 
                             <h2>{el.snippet.thumbnails.medium.url}</h2>
                          </div>
                          <div className="cardTitles"> 
                            <h3>{el.snippet.channelTitle}</h3>
                            <h4>{el.snippet.description}</h4>
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
