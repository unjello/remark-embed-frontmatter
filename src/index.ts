import type unified from 'unified'
import type mdast from 'mdast'
import matter from 'gray-matter'

export type Options = Record<string, unknown>

export type Root = mdast.Root

export default function remarkEmbedFrontmatter(): unified.Transformer<
  Root,
  Root
> {
  return (_, file, done) => {
    const data = file.value
    const matterResult = matter(data)
    file.data = {
      frontmatter: {...matterResult.data}
    }
    done()
  }
}
