import { StyledList } from './StyledList'

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode
}

export const List = ({ children, ...props }: ListProps) => {
  return <StyledList {...props}>{children}</StyledList>
}
