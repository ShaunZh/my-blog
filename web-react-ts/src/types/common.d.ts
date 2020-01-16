// 文章列表项
interface IPostItem {
  time: string
  title: string
  number: string
}

// 标签列表项
interface ITagItem {
  number: string
  title: string
  postSum: number // 文章数量
}
