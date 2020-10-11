import { IGif, IGiphyApiResponse } from "../api/giphy/interfaces";
import { IImage } from "../interfaces/image";

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
