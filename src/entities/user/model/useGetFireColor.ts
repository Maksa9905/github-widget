import { selectTheme } from '#app/gitHubWidget'
import { useAppSelector } from '#shared/hooks'
import { COMBO_DAYS_LIMIT } from '#shared/lib/consts.ts'

export const useGetFireColor = (value: number) => {
  const theme = useAppSelector(selectTheme)

  const percentage = value / COMBO_DAYS_LIMIT

  if (percentage >= 1)
    return theme.comboIndicator[theme.comboIndicator.length - 1]

  return theme.comboIndicator[
    Math.floor(percentage * theme.comboIndicator.length)
  ]
}
