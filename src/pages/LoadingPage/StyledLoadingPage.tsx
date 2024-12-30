import { GitHubWidgetColorTheme } from '#app/theme.ts'
import { FireIcon, GitHubIcon } from '#shared/ui'
import styled from 'styled-components'

export const PageContainer = styled('div')<{ $theme: GitHubWidgetColorTheme }>`
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

export const FireIconContainer = styled('div')`
  position: absolute;
  top: 6px;
  right: 6px;
`

export const LoadingFireIcon = styled(FireIcon)`
  transition: all 1s ease-in-out;
`

export const LoadingGitHubIcon = styled(GitHubIcon)`
  transition: all 1s ease-in-out;
`
