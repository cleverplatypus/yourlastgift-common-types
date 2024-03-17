import { UserProfile } from './user-types.ts'
import { I18NAuthoredHTML, I18NString, I18NStrings, UUID } from './util-types.ts'
import type { Moment } from 'moment'

export type ArticlePostStatus = 'draft' | 'published' | 'archived' | 'static'
export type ArticlePostType = 'blog' | 'news' | 'page'


export type ArticlePost = {
  uuid?: UUID
  type : ArticlePostType
  author_uuid: UUID
  author? : Partial<UserProfile>
  title: I18NString
  body: I18NAuthoredHTML
  tags : I18NStrings
  slug?: string
  published_at?: Date | Moment | null
  featured_image_url? : {full : string, thumbnail : string}
  created_at?: Date | Moment
  updated_at?: Date | Moment
  status: ArticlePostStatus
  has_featured_image: boolean
  excerpt: I18NAuthoredHTML
  comments? : ArticlePostComment[]
  options? : { use_toc? : boolean}
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


