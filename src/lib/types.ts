export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  slug: string
  draft?: boolean
  cover?: string
}

export interface Post extends PostFrontmatter {
  readingTime: string
  wordCount: number
}
