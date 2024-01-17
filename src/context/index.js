"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";
import { initialBlogFormData } from "@/utils";
import { usePathname, useRouter } from "next/navigation";


const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext(initialState);

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialBlogFormData);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  if (session === undefined) return <Spinner />;

  if (session === null && pathname === "/create") router.push("/");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        formData,
        setFormData,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}