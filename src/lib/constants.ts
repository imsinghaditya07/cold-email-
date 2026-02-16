export const APP_NAME = 'Cold Email Agent'
export const DEFAULT_PAGE_SIZE = 10
export const MAX_EMAIL_BATCH_SIZE = 100

export const EMAIL_STATUS = {
    PENDING: 'pending',
    SENT: 'sent',
    FAILED: 'failed',
} as const

export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
} as const
