import { Link } from '#shared/ui'

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/about">to about</Link>
      <Link href="/login">to login</Link>
    </div>
  )
}
