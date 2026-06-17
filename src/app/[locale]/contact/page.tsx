import { setRequestLocale } from 'next-intl/server'
import { ContactPage } from '@/components/contact/ContactPage'

type Props = {
  params: Promise<{ locale: string }>
}

const ContactRoute = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactPage locale={locale as 'vi' | 'en'} />
}

export default ContactRoute
