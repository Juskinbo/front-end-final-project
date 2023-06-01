// 声明一种article类型
interface Article {
  article_id: number
  article_title: string
  article_content: string
  article_author: string
  category_id: number
  publish_time: string
}
interface Category {
  category_id: number
  category_name: string
  father_category_id: number
}
