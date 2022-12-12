import React from 'react'
import Image from 'next/image'

export async function getStaticProps(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=10')
    const json = await data.json()

    return {
        props: {
            results: json.results
        }
    }
}

  
 type PokemonProps= {  
        name: string;
        url:string;   
  }

  type Pokemons = {
    results: Array<PokemonProps>
  }

const index = ({results}:Pokemons) => {

    function getPokemonId(url:string){
        return url.split('pokemon/').pop()?.split('/')[0]
    }
    
    results.map((item)=>console.log(getPokemonId(item.url)))

    
  return (
    <>
    <h1>Pokemons</h1>
    
    {
    results.map((item)=> 
    <Image 
    key={item.name}
    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(item.url)}.png`}
    alt={item.name}
    width={475} height={475}
    ></Image>)
    
    }
    </>
    
  )
}

export default index

