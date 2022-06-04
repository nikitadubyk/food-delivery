import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const request = useCallback(
        async (
            url: string,
            method = 'GET',
            body: string | null = null,
            headers = { 'Content-Type': 'application/json' }
        ) => {
            setError(null)
            setLoading(true)

            try {
                const response = await fetch(url, { method, body, headers })

                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, status: ${response.status}`
                    )
                }

                const data = await response.json()

                setLoading(false)
                return data
            } catch (e) {
                setLoading(false)
                e instanceof Error && setError(e.message)
            }
        },
        []
    )

    return { loading, error, request }
}
