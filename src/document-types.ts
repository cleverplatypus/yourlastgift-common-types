import {Moment} from 'moment'
export type CustomerDocument = {
    uuid: string
    type: CustomerDocumentType
    name: string
    status : CustomerDocumentStatus
    file_name: string
    validated_at : Date | Moment
    valid_until : Date | Moment
    notes : string
  }
  
  export type CustomerDocumentType = 
    'photo-id' | 'concession-card' | 'other'

  export type CustomerDocumentStatus = 'pending-upload' | 'pending-validation' | 'validated'