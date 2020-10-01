export interface IGif {
  id: string;
  title: string;
  username: string;
  url: string;
  source: string;
  user?: {
    avatar_url: string;
    display_name: string;
  };
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
    fixed_height_small: {
      url: string;
      height: number;
      width: number;
    };
    fixed_height_downsampled: {
      url: string;
      height: number;
      width: number;
    };
  };
}

export interface IGiphyApiResponse {
  data: IGif[];
  pagination: {
    total_count: number;
    offset: number;
    count: number;
  };
}
