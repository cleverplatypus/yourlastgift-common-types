import { UserProfile } from './user-types.ts'

export type PetCaseData = {
  name: string
  breed: string
  species: string
  age: number | null
  event_summary: string
  image_extension: string
}

export type WorkingHoursRange = {
  start_time: string
  end_time: string
}
export type WorkingHoursRuleType = 'regular' | 'exception'
export type BaseWorkingHoursRule = {
  type: WorkingHoursRuleType
  sort_order: number
  description: string
  uuid?: string
}
export type WorkingHoursRule = WorkingHoursRegularRule | WorkingHoursExceptionRule

type OneToTwenty =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20

export type WorkingHoursRegularRule = BaseWorkingHoursRule & {
  type: 'regular'
  working_hours: Array<WorkingHoursRange>
  week_days: Array<number>
  weekly_frequency: OneToTwenty
  start_at_week: OneToTwenty
}

export type WorkingHoursExceptionRule = BaseWorkingHoursRule & {
  type: 'exception'
  condition: WorkingHoursExceptionRuleCondition
  working_hours?: Array<WorkingHoursRange>
}

export type DateRange = {
  start: Date | null
  end: Date | null
}
export type WorkingHoursExceptionRuleCondition =
  | WorkingHoursExceptionRuleDateRangeCondition
  | WorkingHoursExceptionRuleExpressionCondition

export type WorkingHoursExceptionRuleDateRangeCondition = {
  type: 'date-range'
  range: DateRange
}

export type WorkingHoursExceptionRuleExpressionCondition = {
  type: 'expression'
  expression: string
}

export type CustomerCase = {
  uuid: string
  customer_uuid: string
  pet_info: PetCaseData | null
}

export type AppointmentSlotType = {
  uuid: string
  duration: number
  description: string
  price: number
  concession_price: number
}

export type WorkingHours = {
  uuid?: string
  counsellor_uuid: string
  start_date: Date | null
  end_date: Date | null
  tz : string
  rules: Array<
    Pick<WorkingHoursRule, 'type' | 'description' | 'sort_order' | 'uuid' | 'working_hours'>
  >
}

export type CounsellingAppointment = {
  uuid: string
  counsellor_uuid: string
  customer_uuid: string
  slot_type_uuid: string
  date: string
  start_time: string
  end_time: string
  customer?: Partial<UserProfile>
  case?: Partial<CustomerCase>
}
