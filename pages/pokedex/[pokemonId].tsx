import React from 'react'
import { useRouter } from 'next/router'

const PokemonId = () => {
    const router = useRouter()
    const pokemonId = router.query.pokemonId

  return (
    <div>pokemonId: {pokemonId}</div>
  )
}

export default PokemonId