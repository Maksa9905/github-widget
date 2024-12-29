import { GitHubWidgetColorTheme } from '#app/theme.ts'
import { List, ListItem } from '#shared/ui'
import styled from 'styled-components'

export const StatisticsList = styled(List)<{ $theme: GitHubWidgetColorTheme }>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
`

export const StatisticsListItem = styled(ListItem)<{
  $theme: GitHubWidgetColorTheme
}>`
  font-size: 10px;
  color: ${({ $theme }) => $theme.text.statisticsColor};
`
