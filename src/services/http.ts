enum METHOD {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  PUT = 'PUT',
}

interface FetchProps extends RequestInit {}

async function _fetch(
  url: string,
  { method, ...rest }: FetchProps,
): Promise<any | Error> {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  try {
    const response = await fetch(`${import.meta.env.VITE_ENDPOINT}${url}`, {
      method,
      headers,
      ...rest,
    })
    return await response.json()
  } catch (err) {
    if (err instanceof Error) {
      return err
    }
    return new Error('Could not establish link with server')
  }
}

export const http = {
  delete: async <T>(endpoint: string): Promise<T> =>
    await _fetch(endpoint, { method: METHOD.DELETE }),

  get: async <T>(endpoint: string): Promise<T> =>
    await _fetch(endpoint, { method: METHOD.GET }),

  patch: async <T>(endpoint: string, payload: any): Promise<T> =>
    await _fetch(endpoint, {
      method: METHOD.PATCH,
      body: JSON.stringify(payload),
    }),

  post: async <T>(endpoint: string, payload: any): Promise<T> =>
    await _fetch(endpoint, {
      method: METHOD.POST,
      body: JSON.stringify(payload),
    }),

  put: async <T>(endpoint: string, payload: any): Promise<T> =>
    await _fetch(endpoint, {
      method: METHOD.PUT,
      body: JSON.stringify(payload),
    }),
}
