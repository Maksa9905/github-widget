import { useGetUserQuery } from '#entities/user/api'
import { Image } from './StyledUserAvatar'

export const UserAvatar = () => {
  const { data: userData } = useGetUserQuery()

  return <Image src={userData?.avatarUrl} />
}
