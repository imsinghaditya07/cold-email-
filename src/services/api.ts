import { siteConfig } from '@/config/site'

interface FetchOptions extends RequestInit {
    params?: Record<string, string>
}

export async function fetchApi<T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const { params, ...init } = options
    const url = new URL(endpoint, siteConfig.url)

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value)
        })
    }

    const response = await fetch(url.toString(), {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...init.headers,
        },
    })

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
    }

    return response.json()
}
