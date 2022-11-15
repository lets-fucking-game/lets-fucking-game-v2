import { MenuItemsType, EarnFillIcon, EarnIcon } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Games '),
      href: '/games?chainId=97',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [],
      // items: [
      //   {
      //     label: t('All Games'),
      //     href: '/games',
      //   },
      //   {
      //     label: t('My Games'),
      //     href: '/my-games',
      //     supportChainIds: SUPPORT_ONLY_BSC,
      //   },
      // ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config