# Search gifs app

# Demo: https://vonpo.github.io/

# Description

Goal of this app is to create app when user can display GIF and store them so when browser is refresh they are not lost.

# Solution

App downloads gifs from Giphy api with those endpoints:

Search gif by terms: `https://developers.giphy.com/docs/api/endpoint#search`

Get trending gifs: `https://developers.giphy.com/docs/api/endpoint#trending`

Gifs are quite huge and displaying many gifs at once with full size and quality could make browser slow.
Giphy provides downsized gifs and those are used in main image grid.

Gifs are displayed by `<InfiniteScrollResource />` this is generic component that loads given `url` and renders it using `render` prop.
It was designed to render any given url and render any view.

App is splitted into two routes with `react-router-dom`:

`<Route path="/" component={GiphyGalleryContainer} exact />`

`<Route path="/favourite" component={FavouriteGalleryContainer} />`

Both components `GiphyGalleryContainer` and `GiphyGalleryContainer` are containers for `<ImageGrid />`

`<ImageGrid ImageView={Component}/>` component  iterates through image list and passes image data to `ImageView` component. 
`ImageGrid` can work in two modes:
1. Images are displayed in even columns and there is logic which splits images and prevents changing image order after loading new images (https://github.com/vonpo/gg_react_take_home/blob/master/src/components/grid/logic.ts)

![Horizontal view](https://github.com/vonpo/gg_react_take_home/blob/master/docs/2020-10-01_21h40_54.png?raw=true)

2. Images are displayed in even rows no special logic is used just css flex.
![Vertical view](https://raw.githubusercontent.com/vonpo/gg_react_take_home/master/docs/2020-10-01_21h41_36.png)

It can be switched using this property: 
https://github.com/vonpo/gg_react_take_home/blob/master/src/components/grid/index.tsx#L19

`<Image />` component can render small or main image with `thumbnail flag parameter.

Favourites state is managed by `FavouriteContext` which is exposed by `useFavourites` with following properties:
```
    state: { favourites: Map<string, object> };
    addAction: (id: string, data: object) => void;
    removeAction: (id: string) => void;
```

Search state is managed by `SearchContext` which is exposed by `useFavourites` with following properties:
```
  state: ISearchState;
  setSearchAction: (query: string) => void;
  setLimitAction: (limit: number) => void;
  setOffsetAction: (offset: number) => void;
  setFoundAction: (found: number) => void;
```
  
# Run App!

## prerequisites
Create `.env` file with `GIPHY_API_KEY`

## run 
Run this script to run and develop app:
`npm install`
`npm start`

## build
`npm run build`

## test
`npm run test`

## run prettier
`npm run prettier`

## Layout 

Main layout uses CSS grid.
It consists of two rows and three columns.

First row is header.
Second row is image gallery.

## Gallery
Gallery has infinite an scroll which loads last element window is scrollable and last element is displayed.

There is one gotcha when we have very tall monitor it can happen that window size is enough to display all elements 
then this won't work. 

### Gallery layout

Gallery has horizontal layout. (created with css flex)

## Favourites
Favourites are saved in local storage they only partial data that is returned by Giphy api.
There is risk that user can exceed this limit! 

# tech stack
* React (hooks, context API)
* Typescript
* Tests(mocha)
* webpack (manually configured)

## Browser

Tested on:
* chrome (windows)
* firefox (windows)
* edge (windows)
* chrome (android)
* safari (ipad ios)

## Documentation

https://www.notion.so/React-Developer-Take-Home-Technical-Challenge-b2fd2789487c492ab49cb4d8b340a220

## Issues
On ipad copy link doesn't work. (don't have mac to investigate this)
