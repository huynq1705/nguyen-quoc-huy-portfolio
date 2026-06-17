import { setRequestLocale } from 'next-intl/server'
import { projects } from '@/lib/data/projects'
import { ProjectsSection } from '@/components/projects/ProjectsSection'

type Props = {
  params: Promise<{ locale: string }>
}

const ProjectsPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  return <ProjectsSection projects={projects} locale={locale as 'vi' | 'en'} />
}

export default ProjectsPage
