import { ReactNode } from "react";

export interface IInfiniteScrollResource<T> {
  url: string;
  render: (data: T) => ReactNode;
  onDataLoaded: (data: T) => void;
  nextUrl: string;
  nextDataMerge: (next: T, current?: T) => T;
  onNextDataLoaded: (data: T) => void;
  onCanLoadMore: (data: T) => boolean;
}
