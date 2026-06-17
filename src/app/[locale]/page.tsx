import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/home/Hero'

type Props = {
  params: Promise<{ locale: string }>
}

const HomePage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  return <Hero locale={locale as 'vi' | 'en'} />
}

export default HomePage
