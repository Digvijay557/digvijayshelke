import { serverEnv } from '@config/server.env'

export interface Raindrop {
  _id: string
  title: string
  link: string
  cover: string
  tags: string[]
}

export const fetchBookmarks = async (page = 0): Promise<Raindrop[]> => {
  try {
    const req = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/0?search=%23portfolio&perpage=50&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${serverEnv.RAINDROP_TOKEN}`,
        },
      }
    )

    if (!req.ok) {
      return []
    }

    const data = await req.json()
    const items = Array.isArray(data?.items) ? data.items : []

    return items.map((item: Raindrop) => ({
      _id: item._id,
      title: item.title,
      link: item.link,
      cover: item.cover,
      tags: Array.isArray(item.tags)
        ? item.tags.filter((tag) => tag !== 'portfolio')
        : [],
    }))
  } catch {
    return []
  }
}
