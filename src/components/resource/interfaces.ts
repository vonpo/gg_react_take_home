export interface IImage {
  id: string;
  images: {
    fixed_width: {
      url: string;
      height: number;
      width: number;
    };
    fixed_height: {
      url: string;
      height: number;
      width: number;
    };
  };
}
export interface IGif extends IImage {
  type: string;
  slug: string;
  username: string;
  url: string;
  source: string;
  bitly_url: string;
  embed_url: string;
}

export interface IGifApiResponse {
  data: IGif[];
}
