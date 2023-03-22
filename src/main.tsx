import { QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import queryClient from './queryClient'
import router from './router'

import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </QueryClientProvider>
  </React.StrictMode>
)
