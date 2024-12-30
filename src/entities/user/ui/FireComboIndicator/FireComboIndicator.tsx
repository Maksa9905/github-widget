import { selectTheme } from '#app/gitHubWidget'
import { useAppSelector } from '#shared/hooks'
import { skipToken } from '@reduxjs/toolkit/query'
import {
  useGetContributionsComboDaysCountQuery,
  useGetUserQuery,
} from '../../api'
import { FireIconContainer, StyledTooltip } from './StyledFireComboIndicator'
import { useGetFireColor } from '#entities/user'
import { FireIcon } from '#shared/ui'

export const FireComboIndicator = () => {
  const theme = useAppSelector(selectTheme)

  const { data: userData } = useGetUserQuery()
  const { data: comboDays } = useGetContributionsComboDaysCountQuery(
    userData?.userName || skipToken,
  )

  const fireColor = useGetFireColor(comboDays!)

  return (
    <>
      <FireIconContainer id="fire-icon-container">
        <FireIcon color={comboDays ? fireColor : theme.loaderColor} />
      </FireIconContainer>
      <StyledTooltip
        anchorSelect={'#fire-icon-container'}
        $theme={theme}
        clickable
        place={'top-start'}
      >
        <b style={{ color: comboDays ? fireColor : theme.loaderColor }}>
          {comboDays}
        </b>{' '}
        contributions days combo
      </StyledTooltip>
    </>
  )
}
