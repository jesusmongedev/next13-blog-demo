import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import CustomImage from '@/components/CustomImage'
import Video from '@/components/Video'

type Filetree = {
  'tree': [
      {
          'path': string,
      }
  ]
}

const GITHUB_USER_CONTENT_REPO_PATH = `${process.env.GITHUB_USER_CONTENT_URL}/${process.env.GITHUB_REPO_PATH}/${process.env.GITHUB_BRANCH}`

export async function getPostByName (fileName: string): Promise<BlogPost | undefined> {
  const res = await fetch(`${GITHUB_USER_CONTENT_REPO_PATH}/${fileName}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (!res.ok) return undefined

  const rawMDX = await res.text()

  if (rawMDX === '404: Not Found') return undefined

  const { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[] }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: 'wrap'
          }]
        ]
      }
    }
  })

  const id = fileName.replace(/\.mdx$/, '')

  const meta: Meta = {
    id,
    title: frontmatter.title,
    date: frontmatter.date,
    tags: frontmatter.tags
  }

  const blogPostObject: BlogPost = { meta, content }

  return blogPostObject
}

const GITHUB_REPO_PATH = `${process.env.GITHUB_REPOS_API_BASE_URL}/${process.env.GITHUB_REPO_PATH}/git/trees/${process.env.GITHUB_BRANCH}?recursive=1`

export async function getPostsMeta (): Promise<Meta[] | undefined> {
  const res = await fetch(GITHUB_REPO_PATH, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (!res.ok) return undefined

  const repoFiletree: Filetree = await res.json()

  const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

  const posts: Meta[] = []

  for (const file of filesArray) {
    const post = await getPostByName(file)
    if (post) {
      const { meta } = post
      posts.push(meta)
    }
  }

  return posts.sort((a, b) => a.date < b.date ? 1 : -1)
}
