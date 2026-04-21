"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

type UserType = {
  name?: string;
  username?: string;
  bio?: string;
  profileImage?: {
    file?: File;
    url: string;
  };
  profileLinks?: [];
};

type UserContextType = {
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user_data");
      if (savedUser) {
        return JSON.parse(savedUser);
      }
    }
    return {
      name: "user",
      username: "username",
      bio: "userbio",
      profileImage: { url: "" },
    };
  });

  useEffect(() => {
    if (user !== undefined) {
      localStorage.setItem("user_data", JSON.stringify(user));
    }
  }, [user]);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must use within UserProvider");
  }
  return context;
}

export default UserProvider;
