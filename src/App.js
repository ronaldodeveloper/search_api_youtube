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
      <section className="Container">
        <article className="result">

        </article>
        <article className="videoPlay"></article>
      </section>
    </main>
  );
}

export default App;
