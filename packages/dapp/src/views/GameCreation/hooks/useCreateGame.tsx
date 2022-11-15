import { useCallback } from 'react'
import { useTranslation } from '@pancakeswap/localization'
import { useToast } from '@pancakeswap/uikit'
import useCatchTxError from 'hooks/useCatchTxError'
import { ToastDescriptionWithTx } from 'components/Toast'
import { useGameFactoryV1Contract } from 'hooks/useContract'
import { parseEther } from '@ethersproject/units'
import { formatBytes32String } from '@ethersproject/strings'
import { useGameContext } from 'views/GameCreation/hooks/useGameContext'
import { ZERO_ADDRESS } from 'config/constants'

export const useCreateGame = (game) => {
  const { t } = useTranslation()
  const { toastSuccess } = useToast()
  const contract = useGameFactoryV1Contract()
  const { actions, currentStep } = useGameContext()

  const { fetchWithCatchTxError, loading: isPending } = useCatchTxError()

  // TODO handle name
  const {
    /* name, */ maxPlayers,
    playTimeRange,
    registrationAmount,
    treasuryFee,
    creatorFee,
    encodedCron,
    numberPlayersAllowedToWin,
    // prizeType,
  } = game

  const createPrize = (index, totalWinners) => {
    return {
      position: index,
      amount: parseEther(`${(registrationAmount * maxPlayers) / totalWinners}`),
      // TODO use prizeType
      standard: 0,
      contractAddress: ZERO_ADDRESS,
      tokenId: 1,
    }
  }

  const mapper = new Array(numberPlayersAllowedToWin).fill('').map((_, i) => i + 1)
  const prizes = mapper.map((index) => createPrize(index, numberPlayersAllowedToWin))

  // TODO GUIGUI Load gameCreationAmount directly from smart contract
  const gameCreationAmountEther = parseEther('0.1')
  const registrationAmountEther = parseEther(`${registrationAmount}`)

  const name = formatBytes32String("Let's Fucking Game VMP")

  const handleCreateGame = useCallback(async () => {
    const receipt = await fetchWithCatchTxError(() =>
      contract.createNewGame(
        name,
        maxPlayers,
        playTimeRange,
        registrationAmountEther,
        treasuryFee,
        creatorFee,
        encodedCron,
        prizes,
        { value: gameCreationAmountEther },
      ),
    )

    if (receipt?.status) {
      toastSuccess(
        t('Success!'),
        <ToastDescriptionWithTx txHash={receipt.transactionHash}>
          {t('You have successfully claimed your prize.')}
        </ToastDescriptionWithTx>,
      )
      actions.nextStep(currentStep + 1)
    }
  }, [
    fetchWithCatchTxError,
    contract,
    name,
    maxPlayers,
    playTimeRange,
    registrationAmountEther,
    treasuryFee,
    creatorFee,
    encodedCron,
    prizes,
    gameCreationAmountEther,
    toastSuccess,
    t,
    actions,
    currentStep,
  ])

  return { isPending, handleCreateGame }
}