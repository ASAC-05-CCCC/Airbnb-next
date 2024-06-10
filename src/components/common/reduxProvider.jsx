'use client'

import filterStore from '@/app/redux/filterStore'
import { Provider } from 'react-redux'

function ReduxProvider({ children }) {
  return <Provider store={filterStore}>{children}</Provider>
}

export default ReduxProvider
