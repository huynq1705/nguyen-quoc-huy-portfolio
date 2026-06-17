import { setRequestLocale } from 'next-intl/server'
import { CvPage } from '@/components/cv/CvPage'

type Props = {
  params: Promise<{ locale: string }>
}

const CvRoute = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <CvPage locale={locale as 'vi' | 'en'} />
}

export default CvRoute
