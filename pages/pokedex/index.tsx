import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    const pokemons = await data.json()

    return {
        props: {
            pokemons
        }
    }
}

  
 type PokemonProps= {  
        name: string;
        url:string;   
  }

  type Pokemons = {
    results: Array<PokemonProps>;
    count:number;
    next: string | null;
    previous: string | null;
  }

  interface InfoList  {
    pokemons: Pokemons
  }
const index = ({pokemons}:InfoList) => {

    function getPokemonId(url:string){
        let pokemonId =  url.split('pokemon/').pop()?.split('/')[0]
        return pokemonId
    }
    
    
  return (
    
    <>
    <h1>Pokemons</h1>
    {
      pokemons.results.map((pokemon)=>
      <React.Fragment key={pokemon.name}>
        <Image 
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00'+getPokemonId(pokemon.url)).slice(-3)}.png`}
        alt={pokemon.name}
        width={475} height={475}
        />
        <Link href={`/pokedex/${pokemon.name}`}>{pokemon.name}</Link>
      </React.Fragment>)
    }
    
    {
    
    }
    </>
    
  )
}

export default index

