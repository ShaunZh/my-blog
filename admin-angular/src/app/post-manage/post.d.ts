/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-01-21 14:25:20
 * @LastEditors: Hexon
 * @LastEditTime: 2021-01-21 14:26:45
 */

export interface Post {
  id: string,
  tagId: number,
  title: string,
  content: string,
  isPublish: number,
  isRecommend: number,
  createAt: string,
  updateAt: string
}
