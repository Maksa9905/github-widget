import { selectTheme } from '#app/gitHubWidget'
import { useGetFireColor, UserStatistics } from '#entities/user/index.ts'
import { useAppSelector } from '#shared/hooks'
import { FireIcon, GitHubIcon } from '#shared/ui'
import {
  FireIconContainer,
  GitHubIconContainer,
  Image,
  InfoContainer,
  NickNameTitle,
  PageContainer,
  StyledTooltip,
} from './StyledHomePage'

export const HomePage = () => {
  const theme = useAppSelector(selectTheme)

  const comboDays = 89

  const fireColor = useGetFireColor(comboDays)

  return (
    <PageContainer $theme={theme}>
      <Image src={'https://avatars.githubusercontent.com/u/149005625?v=4'} />
      <InfoContainer>
        <NickNameTitle $theme={theme}>Maksim Gaivoronskiy</NickNameTitle>
        <UserStatistics
          repositories={23}
          followers={236}
          stars={25}
        />
      </InfoContainer>
      <FireIconContainer id="fire-icon-container">
        <FireIcon color={fireColor} />
      </FireIconContainer>
      <GitHubIconContainer>
        <GitHubIcon color={theme.background.backgroundIconColor} />
      </GitHubIconContainer>
      <StyledTooltip
        anchorSelect={'#fire-icon-container'}
        $theme={theme}
        clickable
        place={'top-start'}
      >
        <b style={{ color: fireColor }}>{comboDays}</b> contributions days combo
      </StyledTooltip>
    </PageContainer>
  )
}
