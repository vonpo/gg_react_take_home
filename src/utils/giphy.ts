import { IGif, IGiphyApiResponse } from "../interfaces/giphy";
import { IImage } from "../interfaces/image";
import { GIPHY_API_KEY } from "../config/giphy";

/**
 * Map giphy response to Image.
 *
 * @param response
 */
export function mapGiphyToImage(response: IGiphyApiResponse): IImage[] {
  return response.data.map((gif: IGif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.url,
    user: gif.user && {
      avatarUrl: gif.user.avatar_url,
      displayName: gif.user.display_name,
    },
    images: {
      main: {
        url: gif.images.fixed_height.url,
        height: gif.images.fixed_height.height,
        width: gif.images.fixed_height.width,
      },
      small: {
        url: gif.images.fixed_width_downsampled.url,
        height: gif.images.fixed_width_downsampled.height,
        width: gif.images.fixed_width_downsampled.width,
      },
    },
  }));
}

export function getGiphyQueryUrl({
  query,
  limit,
  offset,
}: {
  query: string;
  limit: number;
  offset: number;
}) {
  const searchTrending = !Boolean(query);

  if (searchTrending) {
    return `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=${limit}&offset=${offset}`;
  }

  return `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=${limit}&offset=${offset}`;
}
