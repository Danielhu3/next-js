import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps(){
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
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
        let pokemonId =  url.split('pokemon/').pop()?.split('/')[0]
        return pokemonId
        /*
        pokemonId = '00' + pokemonId
        pokemonId = pokemonId.slice(-3)
        return pokemonId
        */


    }
    

    
  return (
    <>
    <h1>Pokemons</h1>
    
    {
    results.map((item)=> 
    <React.Fragment key={item.name}>
    <Image   
    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00'+getPokemonId(item.url)).slice(-3)}.png`}
    alt={item.name}
    width={475} height={475}>
    </Image>
    <Link href={`/pokedex/${getPokemonId(item.url)}`}>{item.name}</Link>
    </React.Fragment>
    )
    
    }
    </>
    
  )
}

export default index

