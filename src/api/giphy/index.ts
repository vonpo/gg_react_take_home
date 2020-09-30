const API_KEY = process.env.GIPHY_API_KEY;

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
    return `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`;
  }

  return `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`;
}
