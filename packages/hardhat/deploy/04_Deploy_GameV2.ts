import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

import { delay } from '../helpers/delay'

const func: DeployFunction = async function ({
  deployments,
  getChainId,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deploy, log } = deployments
  const { deployer: deployerAddress } = await getNamedAccounts()
  const chainId = await getChainId()

  const isLocalDeployment = chainId === '31337' || chainId === '1337'

  const deployer = await ethers.getSigner(deployerAddress)

  const options = {
    from: deployerAddress,
    log: true,
  }

  log('Deploying GameV2 contract')
  const { address: cronExternalAddress } = await deployments.get('CronExternal')
  const libraries = {
    libraries: {
      Cron: cronExternalAddress,
    },
  }

  const {
    address: gameAddress,
    newlyDeployed: gameNewlyDeployed,
    receipt: { gasUsed: gameGasUsed },
  } = await deploy('GameV2', { ...options, ...libraries })

  if (gameNewlyDeployed)
    log(
      `✅ Contract GameV2 deployed at ${gameAddress} using ${gameGasUsed} gas`
    )

  log('Adding GameV2 to Keeper delegators')

  const { address: cronUpkeepAddress } = await deployments.get('CronUpkeep')

  const { interface: cronUpkeepInterface } = await ethers.getContractFactory(
    'CronUpkeep',
    libraries
  )

  const cronUpkeep = new ethers.Contract(
    cronUpkeepAddress,
    cronUpkeepInterface,
    deployer
  )
  cronUpkeep.addDelegator(gameAddress)

  if (isLocalDeployment || !gameNewlyDeployed) return

  await delay(30 * 1000)
  try {
    log(`✅ Verifying contract GameV2`)
    await hre.run('verify:verify', {
      address: gameAddress,
      constructorArguments: [],
    })
    await delay(10 * 1000)
  } catch (error) {
    console.error('Error during contract verification', error.message)
  }
}

func.tags = ['all', 'test', 'dev', 'staging', 'prod', 'game']
func.dependencies = ['keeper']

export default func