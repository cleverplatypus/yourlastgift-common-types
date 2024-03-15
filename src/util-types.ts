import { Moment } from 'moment-timezone'

export type UUID = string

export type SupportedLang = 'en'

export type DBQueryOptions<T> = {
    select? : Array<keyof T>, 
    lang? : SupportedLang
}

export type MomentTimeRange = {
    start_time: Moment
    end_time: Moment
  }
  
export type I18NString = Record<SupportedLang, string>

export type SomeError = Error | PromiseRejectionEvent

export type MaybeGetter<T> = T | (() => T)

export type NameValueTuple = {
  name: string
  value: string
}

export interface IDocumentCommandsHandler {
  onSaveCommand(): Promise<void>
  onDiscardChangesCommand(): Promise<void>
}

export type DirtableModel = {
  isDirty: boolean
  isSaveEnabled?: boolean
  hideRevert?: boolean
  isRevertEnabled?: boolean
}

export type AnyVoidFunction = (...args: any[]) => void
