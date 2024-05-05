interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Youtube Channel',
    description: `A youtube channel that I create videos about software development and programming for economics and
     finance in Farsi.`,
    imgSrc: '/static/images/lwm-logo.png',
    href: 'https://www.youtube.com/@learnwithmehdi8987',
  },
  {
    title: 'Tehran Stocks (Python Package)',
    description: `
    A python package that I created to get the latest and historical information from Tehran Stock Exchange.
    For traders and researchers who want to analyze the Tehran Stock Exchange data.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/ghodsizadeh/tehran-stocks',
  },
]

export default projectsData
