import { AppRole } from "./auth-types.ts"

  export type UserProfile = {
    uuid: string
    preferred_name: string | null
    first_name: string
    bio? : string
    last_name: string
    email: string
    phone: string | null
    date_of_birth: string | null
    residence_address: PostalAddressRecord | null
    roles: AppRole[]
    app_preferences: Record<string, any>
  }

  export type PostalAddressRecord = {
    country_code: string
    housenumber: string
    street: string
    country: string
    county: string
    postcode: string
    state: string
    district: string
    city: string
    state_code: string
    lon: number
    lat: number
    place_id: string
    formatted: string
    result_type: string
    timezone: {
      name: string
      offset_STD: string
      offset_STD_seconds: number
      offset_DST: string
      offset_DST_seconds: number
      abbreviation_STD: string
      abbreviation_DST: string
    }
  }
  
