import { GitHubWidgetColorTheme } from '#app/theme.ts'
import styled from 'styled-components'

export const PageContainer = styled('div')<{ $theme: GitHubWidgetColorTheme }>`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  gap: 16px;
  padding: 16px;
  background-color: ${({ $theme }) => $theme.background.backgroundColor};
  border-radius: 5px;
  height: 124px;
  z-index: 0;
  position: relative;
`

export const GitHubIconContainer = styled('div')`
  height: 124px;
  overflow: hidden;
  position: absolute;
  left: calc(50% - 90px);
  display: flex;
  align-items: center;
  z-index: -1;
  justify-content: center;
`

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const NickNameTitle = styled('h1')<{ $theme: GitHubWidgetColorTheme }>`
  font-size: 16px;
  font-weight: normal;
  color: ${({ $theme }) => $theme.text.nameColor};
`
