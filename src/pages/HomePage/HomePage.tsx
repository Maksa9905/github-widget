import { selectTheme } from '#app/gitHubWidget'
import { useGetUserQuery, UserAvatar, UserStatistics } from '#entities/user'
import { FireComboIndicator } from '#entities/user'
import { useAppSelector } from '#shared/hooks'
import { GitHubIcon } from '#shared/ui'
import { LoadingPage } from '../LoadingPage'
import {
  GitHubIconContainer,
  InfoContainer,
  NickNameTitle,
  PageContainer,
} from './StyledHomePage'

export const HomePage = () => {
  const theme = useAppSelector(selectTheme)

  const { data: userData, isLoading } = useGetUserQuery()

  if (isLoading) return <LoadingPage />

  return (
    <PageContainer $theme={theme}>
      <UserAvatar />
      <InfoContainer>
        <NickNameTitle $theme={theme}>{userData?.userName}</NickNameTitle>
        <UserStatistics />
      </InfoContainer>
      <FireComboIndicator />
      <GitHubIconContainer>
        <GitHubIcon color={theme.background.backgroundIconColor} />
      </GitHubIconContainer>
    </PageContainer>
  )
}
