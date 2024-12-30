import dayjs from 'dayjs'
import { EventReponse, UserResponse } from '../api'
import { User } from '../model/types'
import { DateUtils } from '#shared/lib'

export const mapUser = (data: UserResponse): User => ({
  repositoriesCount: data.public_repos,
  followersCount: data.followers,
  starsCount: data.public_gists,
  avatarUrl: data.avatar_url,
  userName: data.login,
})

export const getContributionsDaysCount = (events: EventReponse[]) => {
  let i = 0
  let count = 0

  let current = DateUtils.removeTime(dayjs(events[i].created_at))
  let previous = DateUtils.removeTime(dayjs(events[i + 1].created_at))

  while (current.diff(previous, 'day') === 1 && i < events.length - 2) {
    i = i + 1
    count = count + 1
    current = DateUtils.removeTime(dayjs(events[i].created_at))
    previous = DateUtils.removeTime(dayjs(events[i + 1].created_at))
  }

  return count
}
