export interface IImage {
  id: string;
  url: string;
  title: string;
  user?: {
    avatarUrl: string;
    displayName: string;
  };
  images: {
    main: {
      url: string;
      height: number;
      width: number;
    };
    small: {
      url: string;
      height: number;
      width: number;
    };
  };
}
