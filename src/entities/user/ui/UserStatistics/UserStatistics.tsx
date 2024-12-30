import { selectTheme } from '#app/gitHubWidget'
import { useAppSelector } from '#shared/hooks'
import { FollowerIcon, RepositoryIcon, StarIcon } from '#shared/ui'
import { useTranslation } from 'react-i18next'
import { StatisticLabel } from './StatisticLabel'
import { StatisticsList, StatisticsListItem } from './StyledUserStatistics'
import { useGetUserQuery } from '#entities/user'

export const UserStatistics = () => {
  const { t } = useTranslation()

  const theme = useAppSelector(selectTheme)
  const { data: userData } = useGetUserQuery()

  return (
    <StatisticsList $theme={theme}>
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(userData?.followersCount || 0)}
            label={t('followers')}
          />
        }
        startAdornment={<FollowerIcon color={theme.text.statisticsColor} />}
      />
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(userData?.repositoriesCount || 0)}
            label={t('repositories')}
          />
        }
        startAdornment={<RepositoryIcon color={theme.text.statisticsColor} />}
      />
      <StatisticsListItem
        $theme={theme}
        label={
          <StatisticLabel
            value={String(userData?.starsCount || 0)}
            label={t('stars')}
          />
        }
        startAdornment={<StarIcon color={theme.text.statisticsColor} />}
      />
    </StatisticsList>
  )
}
