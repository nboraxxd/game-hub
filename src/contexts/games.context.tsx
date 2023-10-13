import { type ReactNode, type Dispatch, type SetStateAction, createContext, useState } from 'react'

type GamesContextType = {
  genre: string
  setGenre: Dispatch<SetStateAction<string>>
}

type Props = {
  children: ReactNode
  defaultValue?: GamesContextType
}

const initialGamesContext: GamesContextType = {
  genre: '',
  setGenre: () => null,
}

export const GamesContext = createContext<GamesContextType>(initialGamesContext)

export default function GamesProvider({ children, defaultValue = initialGamesContext }: Props) {
  const [genre, setGenre] = useState(defaultValue.genre)

  return <GamesContext.Provider value={{ genre, setGenre }}>{children}</GamesContext.Provider>
}
