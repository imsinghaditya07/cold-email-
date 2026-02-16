export interface User {
    id: string
    email: string
    name?: string
    role: 'admin' | 'user'
    createdAt: Date
    updatedAt: Date
}

export interface Prospect {
    id: string
    email: string
    firstName?: string
    lastName?: string
    company?: string
    status: 'new' | 'contacted' | 'replied' | 'converted'
    tags: string[]
}

export interface EmailTemplate {
    id: string
    name: string
    subject: string
    body: string
    variables: string[]
    createdAt: Date
}
