# lost-stylus
Collection of mixins for [Stylus](https://learnboost.github.io/stylus/)
intended for use with [Lost](https://github.com/corysimmons/lost). Makes Lost
properties available without the `lost-` prefix, with the exception of
`lost-utility`.

# Example

```html
<section>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</section>
```

```stylus
section
  lost-utility: clearfix

div
  column: 1/2
```

# Usage
Use like any other Stylus plugin. Doesn't include Lost or
[PostCSS](https://github.com/postcss/postcss) so you'll need to include those
in your Stylus workflow. I've found
[poststylus](https://github.com/seaneking/poststylus) to integrate PostCSS with
Stylus rather nicely.

```javascript
var stylus  = require('stylus'),
    lost    = require('lost-stylus'),
    postcss = require('poststylus');

stylus(str)
  .set('filename', 'app.css')
  .use(lost())
  .use(postcss([
    'lost'
  ])
  .render(function(err, css){
    // logic
  });
```
