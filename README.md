# lazyload-es2015-webpack-test

Test usage of LazyLoad as es2015 module in a WebPack build.

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

The best solution which works out of the box is to use the ES6 module syntax (aka ESM), and import LazyLoad like the following:

```js
import LazyLoad from "vanilla-lazyload";

const lazyLoadOptions = {/* your options here */};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);
```

See [lazyload-init.js](src/lazyload-init.js) for an example, or go to [LazyLoad's readme file](https://github.com/verlok/lazyload/blob/master/README.md) for documentation.

If using the ESM syntax isn't possible for you and you wish to continue using the CJS `require` syntax, read [usage as CommonJS module](#usage-as-commonjs-module) below.


## Build

Configure the `build` script in your `package.json` like the following:

```json
{
	"scripts": {
		"build": "webpack"
	}
}
```

Then, in your terminal, run:

```
npm run build
```

## Result

To see the result, open the `dist/index.html` file.

That's it!

---

## Usage as CommonJS module

In case you want to import LazyLoad using the `require` directive, you must configure WebPack to load the scripts from the package.json's `main` fields instead. [More info](https://webpack.js.org/configuration/resolve/#resolve-mainfields).

So edit your `webpack.config.js` file and add or edit the `resolve.mainFields` setting to `["main", "browser", "module"]` like follows:

```js
module.exports = {
	// other configuration fields here
	resolve: {
		mainFields: ["main", "browser", "module"]
	}
};
```

This tells WebPack to resolve your `require`s to the packages `main` field, which must contain contains the UMD version of the installed modules. [More info](http://2ality.com/2017/04/setting-up-multi-platform-packages.html).

For an example usage, see the `commonJS` branch on this very repo.