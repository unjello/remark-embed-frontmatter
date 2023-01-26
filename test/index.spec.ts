import test from 'ava'
import {remark} from 'remark'
// eslint-disable-next-line import/extensions
import remarkEmbedFrontmatter from '../src/index'

test('remarkEmbedFrontmatter', (t) => {
  t.plan(5)

  const md = remark().use(remarkEmbedFrontmatter).processSync(`---
title: Foo
hero: ./foo.png
---

# Foo
        `)

  t.truthy(md.data.frontmatter)
  const data = md.data as Readonly<Record<string, any>>

  const title = data.frontmatter.title as string
  t.truthy(title)
  t.is(title, 'Foo')

  const hero = data.frontmatter.hero as string
  t.truthy(hero)
  t.is(hero, './foo.png')
})
