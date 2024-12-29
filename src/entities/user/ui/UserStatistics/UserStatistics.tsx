import { selectTheme } from '#app/gitHubWidget'
import { useAppSelector } from '#shared/hooks'
import { FollowerIcon, RepositoryIcon, StarIcon } from '#shared/ui'
import { useTranslation } from 'react-i18next'
import { StatisticLabel } from './StatisticLabel'
import { StatisticsList, StatisticsListItem } from './StyledUserStatistics'

export interface UserStatisticsProps {
  repositories: number
  followers: number
  stars: number
}

export const UserStatistics = ({
  repositories,
  followers,
  stars,
}: UserStatisticsProps) => {
  const { t } = useTranslation()

  const theme = useAppSelector(selectTheme)

  return (
    <StatisticsList $theme={theme}>
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(followers)}
            label={t('followers')}
          />
        }
        startAdornment={<FollowerIcon color={theme.text.statisticsColor} />}
      />
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(repositories)}
            label={t('repositories')}
          />
        }
        startAdornment={<RepositoryIcon color={theme.text.statisticsColor} />}
      />
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(stars)}
            label={t('stars')}
          />
        }
        startAdornment={<StarIcon color={theme.text.statisticsColor} />}
      />
    </StatisticsList>
  )
}
