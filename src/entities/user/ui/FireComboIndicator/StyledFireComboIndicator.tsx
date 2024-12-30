import { GitHubWidgetColorTheme } from '#app/theme.ts'
import { Tooltip } from 'react-tooltip'
import styled from 'styled-components'

export const FireIconContainer = styled('div')`
  position: absolute;
  top: 6px;
  right: 6px;
`

export const StyledTooltip = styled(Tooltip)<{
  $theme: GitHubWidgetColorTheme
}>`
  background-color: ${({ $theme }) =>
    $theme.comboTooltip.backgroundColor} !important;
  color: ${({ $theme }) => $theme.comboTooltip.textColor} !important;
  padding: 4px 8px !important;
  border-radius: 5px !important;
  font-size: 10px !important;
`
