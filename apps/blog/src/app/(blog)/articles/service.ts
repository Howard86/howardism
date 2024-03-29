import "server-only"

import { join } from "node:path"

import glob from "fast-glob"
import { StaticImageData } from "next/image"
import { cache } from "react"

export type Normalise<T> = {
  ids: string[]
  entities: Record<string, T | undefined>
}

export type ArticleEntity = {
  position: number
  slug: string
  meta: ArticleMeta
}

export interface ArticleMeta {
  title: string
  description: string
  date: string
  image: {
    src: StaticImageData
    alt: string
  }
}

export const getArticles = cache(async (): Promise<Normalise<ArticleEntity>> => {
  const filenames = await glob("**/page.mdx", {
    cwd: join(process.cwd(), "src", "app", "(blog)", "articles", "[slug]", "(docs)"),
  })

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const meta = await import(`./[slug]/(docs)/${filename}`).then((m) => m.meta as ArticleMeta)

      return {
        slug: filename.replace(/\/page.mdx$/, ""),
        meta,
      }
    }),
  )

  files.sort((a, b) => new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf())

  const results: Normalise<ArticleEntity> = {
    ids: [],
    entities: {},
  }

  files.forEach((file, index) => {
    results.ids.push(file.slug)
    results.entities[file.slug] = {
      position: index,
      ...file,
    }
  })

  return results
})

export const getSlicedArticles = cache(
  async (count?: number): Promise<Normalise<ArticleEntity>> => {
    const articles = await getArticles()

    return {
      ids: articles.ids.slice(0, count),
      entities: articles.entities,
    }
  },
)
