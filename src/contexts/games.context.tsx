import { type ReactNode, type Dispatch, type SetStateAction, createContext, useState } from 'react'

type GamesContextType = {
  gamesTitle: string
  setGamesTitle: Dispatch<SetStateAction<string>>
}

type Props = {
  children: ReactNode
  defaultValue?: GamesContextType
}

const initialGamesContext: GamesContextType = {
  gamesTitle: '',
  setGamesTitle: () => null,
}

export const GamesContext = createContext<GamesContextType>(initialGamesContext)

export default function GamesProvider({ children, defaultValue = initialGamesContext }: Props) {
  const [gamesTitle, setGamesTitle] = useState(defaultValue.gamesTitle)

  return <GamesContext.Provider value={{ gamesTitle, setGamesTitle }}>{children}</GamesContext.Provider>
}
