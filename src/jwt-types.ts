export type JWTPayload = {
    exp: number
    iat: number
    iss: string
    sub: string
    email: string
    session_id : string
    app_metadata : {
        
    },
    user_metadata : {

    }
}

export type JWTHeader = {
    alg: string
    typ: string
}

export type JWT = [
    JWTHeader,
    JWTPayload,
    Uint32Array
]