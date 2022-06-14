import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const request = useCallback(
        async (
            url: string,
            method = 'GET',
            body: string | null = null,
            headers: any = { 'Content-Type': 'application/json' }
        ) => {
            setError(null)
            setLoading(true)

            try {
                const response = await fetch(url, { method, body, headers })

                const data = await response.json()

                if (!response.ok) {
                    //@ts-ignore
                    setError(data.message)
                }

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
