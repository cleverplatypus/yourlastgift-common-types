import { StripePaymentIntent } from "./stripe-types.ts"

export type CustomerSubscription = {
    uuid?: string
    course_uuid: string
    user_uuid : string
    payment_info : StripePaymentIntent
  }
  export type PriceInfo = {
    amount: number
    included_tax: number
    currency: string
    scheme: string
  }
  