# generator-clekyll [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

_My First Yeoman Generator_ :rainbow:

Creates the skeleton of a Jekyll blog post in the style that I use in my blog.

### Example

For a blog post called 'Bish Bash Bosh' you'd get something like:

Filename: `2016-02-12-bish-bash-bosh.markdown`

```
---
layout: post
title: Bish Bash Bosh
date: 2016-02-12 23:17:42
comments: true
published: false
---

<h1>Your blog post goes here</h1>
```

## Installation

```bash
npm install -g yo
npm install -g generator-clekyll
```

Run the generator.

```bash
yo clekyll
```

It will create the file in the current directory.

*To-Do:* Check for `yo-rc.json` existence and create in `/_posts` if it exists.

## Getting To Know Yeoman

Yeoman is a secretive knobhead as evidenced by the sparse and disorganised documentation for him online. Don't trust a word he says. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Claire Parker]()


[npm-image]: https://badge.fury.io/js/generator-clekyll.svg
[npm-url]: https://npmjs.org/package/generator-clekyll
[travis-image]: https://travis-ci.org/claireparker/generator-clekyll.svg?branch=master
[travis-url]: https://travis-ci.org/claireparker/generator-clekyll
[daviddm-image]: https://david-dm.org/claireparker/generator-clekyll.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/claireparker/generator-clekyll
[coveralls-image]: https://coveralls.io/repos/claireparker/generator-clekyll/badge.svg
[coveralls-url]: https://coveralls.io/r/claireparker/generator-clekyll
