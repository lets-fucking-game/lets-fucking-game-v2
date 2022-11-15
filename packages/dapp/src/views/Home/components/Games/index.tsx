import { useState, useMemo } from 'react'
import { GamesPageLayout } from 'views/Games'
import { useWeb3React } from '@pancakeswap/wagmi'
import GameCard from 'views/Games/components/GameCard/GameCard'

import { useGames } from 'state/games/hooks'
import Loading from 'components/Loading'

import { useTranslation } from '@pancakeswap/localization'

import { Heading, Flex, Box, Text } from '@pancakeswap/uikit'
import FlexLayout from 'components/Layout/Flex'

const NUMBER_OF_GAMES_VISIBLE = 6

const GamesPage = () => {
  const { t } = useTranslation()

  const { account } = useWeb3React()

  const { data: games } = useGames()
  const [numberOfGamesVisible] = useState(NUMBER_OF_GAMES_VISIBLE)

  const activeGames = games.filter((game) => !game.isDeleted)

  const chosenGamesMemoized = useMemo(() => {
    return activeGames.slice(0, numberOfGamesVisible)
  }, [activeGames, numberOfGamesVisible])

  return (
    <Box width="100%">
      <Flex mb="40px" alignItems="center" flexDirection="column">
        <Heading mb="24px" scale="xl" color="secondary">
          {t('Choose your Game')}
        </Heading>
        <Text textAlign="center">
          {t('Register for the game and wait until the total number of players is reached')}
        </Text>
      </Flex>
      <FlexLayout>
        {chosenGamesMemoized.map((game) => (
          <GameCard key={game.id.toNumber()} game={game} account={account} />
        ))}
        {!chosenGamesMemoized && (
          <Flex justifyContent="center">
            <Loading />
          </Flex>
        )}
      </FlexLayout>
    </Box>
  )
}

GamesPage.Layout = GamesPageLayout

export default GamesPage