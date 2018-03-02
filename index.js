// import dependencies
const express = require('express'),
      checkIngredient = require('./checkIngredient');

// config
const config = {
  port: 8081
};

// init express app
const app = express();

// render server HTML
const renderPage = (html) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Does It Go in Salad?</title>
        <style>
          html, body { height: 100%; }
          body { font-family: sans-serif; margin: 0; }
          #container { display: table; height: 100%; text-align: center; width: 100%; }
          h1 { display: table-cell; vertical-align: middle; }
        </style>
      </head>
      <body>
        <div id="container">${html}</div>
      </body>
    </html>
  `;
}

// app routes
app.get('/:ingredient', (req, res) => {
  checkIngredient(req.params.ingredient);
  const view = `
    <h1>${checkIngredient(req.params.ingredient)}</h1>
  `;
  
  return res
    .set('Content-Type', 'text/html')
    .status(200)
    .end(renderPage(view));
});

// start app
app.listen(config.port, (error) => {
  if(!error) {
    console.log(`App is running on port: ${config.port}!`);
  }
});

module.exports = app;
//export default app;