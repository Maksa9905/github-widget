import { HTMLAttributes } from 'react'
import { StyledListItem } from './StyledListItem'

export type ListItemProps = HTMLAttributes<HTMLLIElement> & {
  label: React.ReactNode
  startAdornment?: React.ReactNode
}

export const ListItem = ({
  label,
  startAdornment,
  ...props
}: ListItemProps) => {
  return (
    <StyledListItem {...props}>
      {startAdornment}
      {label}
    </StyledListItem>
  )
}
