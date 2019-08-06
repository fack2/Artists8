# Hebron Rest:

## Description:

A website that shows the user the four most expensive paintings in the world.
When the user clicks on one of them, it shows some details about them. It also
allows you to add a painting if you want, with a list of details about it using
a form.

## User journey:

- As a user I'm able to choose a painting.
- As a user I'm able to see some details about it.
- As a user I'm able to add a new painting by filling a form only if I'm logged
  into the website.

## Wireframe:

- Home page:

<img src = "https://user-images.githubusercontent.com/45894766/62537282-b5e7a200-b858-11e9-9004-adcb0bb896c0.png" width='50%' >

- Post painting page:

## File Structure:

- public:

  - images:
    - 1.png
    - 2.png
    - 3.png
    - AbuMazin.png
    - TabonAlreef.png
    - KFC.png
    - RozaChrunchy.png
    - Q-Cany.png
    - Segafredo.png
    - logo.png
  - index.html
  - style.css
  - index.js

- src:
- controllers
- views:
  - partials: headers.hbs
  - layouts:
    - main.hbs
  - database:
    - db_build.js
    - db_build.sql
    - db_connection.js
  - queries:
    - getData.js
    - postData.js
  - app.js
  - server.js

* .gitignore
* .travis.yml
* package.json
* README.md

## Schema:

<img src='https://user-images.githubusercontent.com/47659847/62529890-34881380-b848-11e9-9c0a-d2fd3ffaa837.png' height='40%' width='40%'>

## Team:

- [Rawan](https://github.com/95rawan)
