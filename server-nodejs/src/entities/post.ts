export interface Post {
  id?: number
  tag_id?: number
  title: string
  content: string
  create_time: Date
  update_time: Date
  is_publish: boolean
  is_recommend: boolean
}
