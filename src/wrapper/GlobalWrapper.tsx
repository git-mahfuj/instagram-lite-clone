import UserProvider from "@/contexts/UserContext";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import PostProvider from "@/contexts/PostContext";
const GlobalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <UserProvider>
        <PostProvider>{children}</PostProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default GlobalWrapper;
