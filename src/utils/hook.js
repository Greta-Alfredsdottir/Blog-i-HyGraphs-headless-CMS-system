import { useEffect, useState } from 'react'
import { graphClient } from './graphClient'

export const useGraphQuery = (request) => {
  // useState er en React Hook, 
  // der bruges til at gemme og opdatere data (state) i funktionelle komponenter.
  const [data, setData] = useState('') 
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
// useEffect er en React Hook, der bruges til at køre kode, 
// når noget sker i komponenten — fx når den loader,
// når state ændrer sig, eller når den fjernes igen.
  useEffect(() => {
    setIsLoading(true)
    const gqlFetch = async () => {
      try {
        const data = await graphClient.request(request)
        setData(data)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    gqlFetch()
  }, [])

  return { data, error, isLoading }
}