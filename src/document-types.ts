import {Moment} from 'moment'
export type CustomerDocument = {
    uuid: string
    type: string
    name: string
    file_name: string
    validated_at : Date | Moment
    valid_until : Date | Moment
    notes : string
  }
  