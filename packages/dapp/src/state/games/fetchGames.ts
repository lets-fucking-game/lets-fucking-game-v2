import { getGameFactoryV1Contract } from 'utils/contractHelpers'
import { GameFactory } from 'config/types/typechain'

import { gameBaseTransformer, gameExtendedTransformer } from './transformers'

import {
  fetchPublicGamesData,
  fetchGamesPlayersAddresses,
  fetchGamesPrizes,
  fetchGamesPlayersData,
} from './fetchGameData'
import { State, SerializedGame, DeserializedGame, DeserializedGameUserData } from '../types'

const fetchGames = async (chainId: number): Promise<SerializedGame[]> => {
  const gameFactoryContract: GameFactory = getGameFactoryV1Contract(chainId)
  const gamesToFetch: GameFactory.GameStructOutput[] = await gameFactoryContract.getDeployedGames()

  const [gameData, gamePlayers] = await Promise.all([
    fetchPublicGamesData(gamesToFetch, chainId),
    fetchGamesPlayersAddresses(gamesToFetch, chainId),
  ])
  const transformedGames = gamesToFetch.map(gameBaseTransformer(gameData, gamePlayers))

  // TODO GUIGUI HANDLE gamePlayersData
  const [gamePrizes /* , gamePlayersData */] = await Promise.all([
    fetchGamesPrizes(transformedGames, chainId),
    // fetchGamesPlayersData(transformedGames, chainId),
  ])

  const completeGames = transformedGames.map(gameExtendedTransformer(gamePrizes /* , gamePlayersData */))
  return completeGames
}

export default fetchGames