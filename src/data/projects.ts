export interface Project {
  name: string
  description: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    name: 'Home Server',
    description: 'Infraestrutura pessoal com Linux, Docker e self-hosting.',
    tags: ['Linux', 'Infra', 'Self-hosting'],
    url: 'https://github.com/jotatw/homeserver',
  },
  {
    name: 'Hermes Remote',
    description: 'Interface web (PWA) para IA local e controle remoto.',
    tags: ['Local AI', 'PWA', 'Automação'],
    url: 'https://github.com/jotatw/hermes-remote',
  },
  {
    name: 'Melody Sync',
    description: 'Ferramenta desktop para organizar bibliotecas musicais.',
    tags: ['Desenvolvimento', 'Kotlin'],
    url: 'https://github.com/jotatw/Melody-Sync',
  },
]