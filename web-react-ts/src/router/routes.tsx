import Home from '@containers/home'
import Post from '@/containers/post'
import Tag from '@/containers/tag'

const routes = [
  {
    path: '/home',
    auth: [''],
    component: Home
  },
  {
    path: '/post',
    // auth: [''],
    component: Post
  },
  {
    path: '/tag',
    component: Tag
  }
]

export default routes
