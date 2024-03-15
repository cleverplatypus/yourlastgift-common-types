export type StripeIntentPaymentStatus = 'succeeded' | 'requires_action' | 'payment_declined';

export type StripePaymentIntent = {
    client_secret : string
    id : string
    amount : number
  }
