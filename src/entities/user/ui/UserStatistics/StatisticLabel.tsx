export const StatisticLabel = ({
  value,
  label,
}: {
  value: string
  label: string
}) => {
  return (
    <span>
      <b>{value}</b> {label}
    </span>
  )
}
