# BambooJS

## What is Bamboo ?

Bamboo stands for "**Ba**ckbone **m**arionette **boo**tstrap. At first, Bamboo
aimed to provide a solid boilerplate for designing responsive client side MVC
applications of any-scale, intended to indented code lovers and python fanatics.
You can find the original project here:
[http://github.com/gloaec/bamboo](http://github.com/gloaec/bamboo)

Given the very promising prospects offered by NodeJS, the objectives were
reassessed. Bamboo provides a very modular architecture based on [Brian
Mann](https://github.com/brian-mann)'s approach of
[Backbone-Marionette](https://github.com/marionettejs/backbone.marionette)
concerning the client-side application and tends to adopt
[Snap](https://github.com/snap-project)'s philosphy for APIs management. So far,
it is based on [Sails](https://github.com/balderdashy/sails) (for easy
techno-transition matters) and tries not much to stick to rails mechanisms, in
order to ease a potential future technology change.

## Installation

With [node](http://nodejs.org/)
[installed](http://sailsjs.org/#!documentation/new-to-nodejs):

    git clone git@github.com:gloaec/bamboojs.git
    cd bamboojs
    npm install
    node app.js

Point your web browser at [http://localhost:1337](http://localhost:1337).

## Demo

Try it out: [http://bamboo.pwr.link/](http://bamboo.pwr.link)

## Documentation

Checkout the documentation: [http://bamboo.pwr.link/doc/index.html](http://bamboo.pwr.link/doc/index.html)

## Bamboo components

Available components so far:

- **Loading**: Utility to inject spinner while loading some entity.
- **Breadcrumbs**: Current page navigation breadcrumb
- **Flash**: Generate flash alerts from application command
- **Page**: Helper to set up page with title, subtitle, breadcrumbs, etc.

## Links


## License

[GNU General Public License v3.0](http://www.gnu.org/) - Copyright © 2015 Ghislain Loaec
