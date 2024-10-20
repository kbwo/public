interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Testing Language Server',
    description: `Language server for real-time testing diagnostics`,
    imgSrc: '',
    href: 'https://github.com/kbwo/testing-language-server',
  },
]

export default projectsData
