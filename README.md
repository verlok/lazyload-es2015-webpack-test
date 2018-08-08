# lazyload-es2015-webpack-test

LazyLoad in a WebPack build.

## Installation

Install [LazyLoad](https://github.com/verlok/lazyload) with the command

```
npm install vanilla-lazyload
```

Or install a specific version with 

```
npm install vanilla-lazyload@{{version}}
```

## Usage

```js
import LazyLoad from "vanilla-lazyload";

const lazyLoadOptions = {/* your options here */};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);
```

See [lazyload-init.js](src/lazyload-init.js) for an example, or go to [LazyLoad's readme file](https://github.com/verlok/lazyload/blob/master/README.md) for documentation.

## Build

Configure the `build` script in your `package.json` like the following:

```json
{
	"scripts": {
		"build": "webpack"
	}
}
```

Then in your terminal, run:

```
npm run build
```

## Result

To see the result, open the `dist/index.html` file.