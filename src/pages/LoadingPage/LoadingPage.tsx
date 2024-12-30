import { selectTheme } from '#app/gitHubWidget/gitHubWidgetSlice.ts'
import { useAppSelector } from '#shared/hooks'
import {
  FireIconContainer,
  GitHubIconContainer,
  PageContainer,
} from './StyledLoadingPage'
import { FireIcon, GitHubIcon } from '#shared/ui'

export const LoadingPage = () => {
  const theme = useAppSelector(selectTheme)

  return (
    <PageContainer $theme={theme}>
      <FireIconContainer id="fire-icon-container">
        <FireIcon color={theme.loaderColor} />
      </FireIconContainer>
      <GitHubIconContainer>
        <GitHubIcon color={theme.loaderColor} />
      </GitHubIconContainer>
    </PageContainer>
  )
}
