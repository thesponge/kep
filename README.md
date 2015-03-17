[![Stories in Ready](https://badge.waffle.io/thesponge/kep.png?label=ready&title=Ready)](https://waffle.io/thesponge/kep)
# Introduction

## Knowledge Exchange Platform (KEP)

(general description will be updated here)

### What works

* Backend
    * Rails, Devise-based internal and GitHub external authentication (more to add)
    * Rails behaves as an API for any frontend
* Frontend
    * ember-cli frontend with handlebars templates (based on Zurb Foundation)
    * authentication based on Devise, the ember-cli bindings
    * authenticated-only routes and templates (for fixer app at the moment)


### What are we working on

* Backend
    * CRUD operations on user submissions
    * OAuth integration for more providers
* Frontend
    * Main module's (match app) main template. Partials: sidebars, feedback area. Outlets: default + navbar
    * Sign up additional forms (pwd recovery, live input validation)

### What's planned
* Matchmacking functionality,ranking/comment system,user notifications 
* ownCloud integration
    * create an adapter for OC's database so we can inject Sorcery users into it (implies strict version dependency on ownCloud)
    * consume ownCloud's API in order to populate the interface with some of its features (Ember -> Rails -> ownCloud -> Rails -> Ember), such as: files, calendars, contacts ( *DAV) 

--------

# Development

Detailed information about the Rails backend and the Ember client are to be found in their own README files: [backend](https://github.com/thesponge/kep/tree/master/backend) / [frontend](https://github.com/thesponge/kep/tree/master/frontend).

## How it works

* Authenticate to a Rails/Devise server from an Ember CLI app
* (...)


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
bower install
ember init
# say no to every prompt (don't overwrite anything)
npm start
```
You can only log in from the ember app.

Two accounts will be already available for log in:
```
green@mail.com // 12345678
 pink@mail.com // 12345678
```

## About
Authentication is done using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and Devise

