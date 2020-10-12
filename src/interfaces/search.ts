import { FormEvent, RefObject } from "react";

export interface ISearchState {
  found: number;
  query: string;
  limit: number;
  offset: number;
}

export interface ISearchProps {
  onSubmit: (_e: FormEvent<HTMLFormElement>) => void;
  searchRef: RefObject<HTMLInputElement>;
}
