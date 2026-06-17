import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

const ProjectDetailPage = async ({ params }: Props) => {
  const { locale, slug } = await params
  redirect(`/${locale}/projects#${slug}`)
}

export default ProjectDetailPage
