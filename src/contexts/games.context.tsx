import { type ReactNode, type Dispatch, type SetStateAction, createContext, useState } from 'react'

type GamesContextType = {
  genre: string | undefined
  platform: string | undefined
  setGenre: Dispatch<SetStateAction<string | undefined>>
  setPlatform: Dispatch<SetStateAction<string | undefined>>
}

type Props = {
  children: ReactNode
  defaultValue?: GamesContextType
}

const initialGamesContext: GamesContextType = {
  genre: undefined,
  platform: undefined,
  setGenre: () => null,
  setPlatform: () => null,
}

export const GamesContext = createContext<GamesContextType>(initialGamesContext)

export default function GamesProvider({ children, defaultValue = initialGamesContext }: Props) {
  const [genre, setGenre] = useState(defaultValue.genre)
  const [platform, setPlatform] = useState(defaultValue.platform)

  return <GamesContext.Provider value={{ genre, setGenre, platform, setPlatform }}>{children}</GamesContext.Provider>
}
