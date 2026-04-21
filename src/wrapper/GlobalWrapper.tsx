import UserProvider from '@/contexts/UserContext'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
const GlobalWrapper = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <UserProvider>{children}</UserProvider>
            
          </ThemeProvider>
  )
}

export default GlobalWrapper