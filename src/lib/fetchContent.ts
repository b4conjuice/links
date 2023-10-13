import fetcher from '@/lib/fetcher'

export type Content = {
  list: string[]
}
export default async function fetchContent(url: string) {
  return await fetcher<Content>(url)
}
