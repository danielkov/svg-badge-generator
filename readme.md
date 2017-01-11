# Badger - ReadMe [![Badger](https://badgersvg.herokuapp.com/badge/Badger/cool/rgba(0,139,2,1))](https://badgersvg.herokuapp.com/) [![Badger](https://badgersvg.herokuapp.com/badge/Contrib/welcome/rgba(0,77,207,1))](https://github.com/danielkov/svg-badge-generator/pulls)

This application is a proof of concept application written for Node JS, using ES6 and ES7 syntax, which means it's so new that you even need to chuck that `--harmony` flag in there when you run it on the latest current version of Node.

The working setup of this repo is up at Heroku [here!](https://badgersvg.herokuapp.com/)

## Example

To create a badge, just use the front-page React application, which lets you pick from some default colors and even gives you a live preview of the badge you are creating. Afterwards, just click on `Get Badge!` for the server to automatically generate your badge. Note that the badges come in SVG format only and are not stored anywhere, but are generated from the URL each time a request comes in.

One of the badges used above can be added to your ReadMe.md like this:

```markdown
[![Badger](https://badgersvg.herokuapp.com/badge/Badger/cool/rgba(0,139,2,1))](https://badgersvg.herokuapp.com/)
```

To change the first part of the text, just change the URL parameter following `badge`, to change the right side, edit the next parameter and finally for the color, use a valid RGB or RGBA code at the end of your URL. It's that simple! :)

# To Do

Make the generated badges resize according to the text they encapsulate.
