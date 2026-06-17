import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nguyen Quoc Huy — Front-end Developer',
  description: 'Portfolio of Nguyen Quoc Huy — Front-end Developer',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => children

export default RootLayout
