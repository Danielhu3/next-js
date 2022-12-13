import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        pokemonId: `${pokemon.name}`
      }
    }
  })

  return {paths, fallback:false}
 
}

const PokemonId = ({pokemon}:any) => {
  function getPokemonId(id:number){
    let pokemonId =  ('00' + id).slice(-3)
    return pokemonId
}
  
  console.log(pokemon)
  return (
    <>
      <Link href={'/pokedex'}>Voltar</Link>
      <Image 
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId(pokemon.id)}.png`}
        alt={pokemon.name}
        width={475} height={475}/>

        <ul>
          <li>height: {pokemon.height}</li>
          <li>weight: {pokemon.weight}</li>
        </ul>

    </>
  )
}

export default PokemonId
