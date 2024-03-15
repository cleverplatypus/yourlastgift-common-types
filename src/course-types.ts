export type CourseData = {
  uuid: string
  title: string
  description: string
  slug: string
  price: CoursePricing
}

export type CoursePricing = { amount: number; scheme: string; currency: string }
