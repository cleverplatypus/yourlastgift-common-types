import { UserProfile } from './user-types.ts'
import { I18NString, UUID } from './util-types.ts'
import type { Moment } from 'moment'

export type ArticlePostStatus = 'draft' | 'published' | 'archived' | 'static'
export type ArticlePostType = 'blog' | 'news' | 'page'

export type ArticlePost = {
  uuid: UUID
  type : ArticlePostType
  author_uuid: UUID
  author? : Partial<UserProfile>
  title: I18NString
  body: I18NString
  slug: string
  tags: UUID[]
  published_at: Date | Moment
  created_at: Date | Moment
  updated_at: Date | Moment
  status: ArticlePostStatus
  featured_image?: string
  excerpt: I18NString
  comments? : ArticlePostComment[]
}

export type ArticlePostLocal = ArticlePost & {
  title: string
  body: string
  excerpt: string
}

export type ArticlePostComment = {
    uuid : UUID
    parent_comment_uuid : UUID | null
    user_uuid : UUID
    post_uuid : UUID
    created_at : Date | Moment
    body : string
    approved_at : Date | Moment | null
}


