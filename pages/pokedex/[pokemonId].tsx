import React from 'react'
import Image from 'next/image'

export async function getStaticProps(context:any) {
    const {params} = context
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
    
    const pokemon = await data.json()

    return {
      props: {pokemon}
    }
}

export async function getStaticPaths() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()

  const paths = data.results.map((pokemon:any)=>{
    return{
      params:{
        pokemonId: `${pokemon.id}`
      }
    }
  })

  return {paths, fallback:false}
 
}

const PokemonId = ({pokemon}:any) => {
  
  console.log(pokemon)
  return (
    <>
      <div>teste</div>
    </>
  )
}

export default PokemonId

/*
 <div>pokemonId: {pokemonId}</div>
    <Image 
    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
    alt={pokemonId ? pokemonId : ''}
    width={475} height={475}
    />

*/