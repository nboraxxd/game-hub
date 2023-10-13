import { type ReactNode, type Dispatch, type SetStateAction, createContext, useState } from 'react'

type GamesContextType = {
  genre: string
  platform: string
  setGenre: Dispatch<SetStateAction<string>>
  setPlatform: Dispatch<SetStateAction<string>>
}

type Props = {
  children: ReactNode
  defaultValue?: GamesContextType
}

const initialGamesContext: GamesContextType = {
  genre: '',
  platform: '',
  setGenre: () => null,
  setPlatform: () => null,
}

export const GamesContext = createContext<GamesContextType>(initialGamesContext)

export default function GamesProvider({ children, defaultValue = initialGamesContext }: Props) {
  const [genre, setGenre] = useState(defaultValue.genre)
  const [platform, setPlatform] = useState(defaultValue.platform)

  return <GamesContext.Provider value={{ genre, setGenre, platform, setPlatform }}>{children}</GamesContext.Provider>
}
