import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const PokemonId = () => {
    const router = useRouter()
    const pokemonId = router.query.pokemonId

  return (
    <>
    <div>pokemonId: {pokemonId}</div>
    <Image 
    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`}
    alt={pokemonId ? pokemonId : ''}
    width={475} height={475}
    />
    </>
  )
}

export default PokemonId