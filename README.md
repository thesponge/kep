# Introduction

## Knowledge Exchange Platform (KEP)


### What works

* Backend
    * Rails server with Sorcery-based authentication and GitHub integration (more to add)
    * Rails behaves as an API for any frontend
* Frontend
    * ember-cli frontend with handlebars templates (based on Zurb Foundation)
    * authentication using the initial backend version (based on Devise) - deprecated, switching to Sorcery in progress
    * authenticated-only routes and templates (for fixer app at the moment)


### What are we working on

* Backend
    * CRUD operations on user submissions
    * OAuth integration for more providers
* Frontend
    * Authentication 
    * SASS support for Foundation (currently a bug in our combination of node, ember and broccoli SASS modules)
    * Main module's (fixer app) main template. Partials: sidebars, feedback area. Outlets: default + navbar
    * Sign up additional forms (pwd recovery, live input validation)

### What's planned

* ownCloud integration
    * create an adapter for oC's database so we can inject Sorcery users into it (implies strict version dependency on ownCloud)
    * consume ownCloud's API in order to populate the interface with some of its features (Ember -> Rails -> ownCloud -> Rails -> Ember), such as: files, calendars, contacts ( *DAV) 

--------

# Development

Detailed information about the Rails backend and the Ember client are to be found in their own README files: [backend](https://github.com/thesponge/kep/tree/master/backend) / [frontend](https://github.com/thesponge/kep/tree/master/frontend).

## How it works

* Authenticate to a Rails/Sorcery server from an Ember CLI app
* [...]


## Build
```bash
git clone https://github.com/thesponge/kep.git

# OR

git clone git@git.thesponge.eu:thesponge/kep-ember.git # (this is a mirror)
```

```bash
cd backend
bundle update
rake db:migrate
rails server
```

```bash
cd frontend
npm install

npm install --save-dev ember-cli-simple-auth
npm install --save-dev ember-cli-content-security-policy

bower update
ember init
# say no to every prompt (don't overwrite anything)
ember server --proxy http://0.0.0.0:3000
```
You can only log in from the ember app.

The accounts for log in can be created by starting the Rails app and using its default views (on http://localhost:3000 -> add new user)

## About
Authentication is done using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and [Sorcery](https://github.com/NoamB/sorcery).
