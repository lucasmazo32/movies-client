import React, { type ReactElement } from 'react'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown): {
    hasError: boolean
    error: unknown
  } {
    return { hasError: true, error }
  }

  componentDidCatch(error: any, errorInfo: any): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render(): ReactElement | React.ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

export { ErrorBoundary }
