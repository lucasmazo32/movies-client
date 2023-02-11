import { analytics } from '@/firebase'
import { logEvent } from 'firebase/analytics'

export const isLocal = process.env.NODE_ENV === 'development'

const logger = {
  state: (substate: string, info: string) => {
    if (isLocal) {
      console.log(
        `%c[STATE - ${substate}]%c\n${info}`,
        'font-weight: 600; color: #14A854;',
        '',
      )
      return null
    }
  },
  debug: (info: string) => {
    if (isLocal) {
      console.log(
        `%c[DEBUG]%c\n${info}`,
        'font-weight: 600; color: #E69200;',
        '',
      )
      return null
    }
  },
  error: (error: unknown) => {
    if (!(error instanceof Error)) {
      return null
    }

    if (isLocal) {
      const stack = error.stack?.slice(0, 1000)
      console.log(
        `%c[ERROR]%c ${error.message}\n\nTRACE: ${stack ?? ''}`,
        'font-weight: 600; color: #F9401E;',
        '',
      )
      return null
    }
  },
  log: (name: string, info?: Record<string, any>) => {
    if (isLocal) {
      console.log(
        `%c[LOG]%c\n${name}\n${info ? JSON.stringify(info) : ''}`,
        'font-weight: 600; color: #357DED;',
        '',
      )
      return null
    }
    logEvent(analytics, name, info)
  },
}

export { logger }
