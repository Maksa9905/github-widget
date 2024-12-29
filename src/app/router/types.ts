export interface RouterState {
  route: Routes
}

export const routes = {
  home: '/',
  about: '/about',
  login: '/login',
} as const

export type Routes = (typeof routes)[keyof typeof routes]
