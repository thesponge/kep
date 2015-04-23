[![Stories in Ready](https://badge.waffle.io/thesponge/kep.png?label=ready&title=Ready)](https://waffle.io/thesponge/kep)
# Introduction

## Knowledge Exchange Platform (KEP)

(general description will be updated here)

--------

# Installation

```bash
git clone https://github.com/thesponge/kep
cd kep
git submodule init
git submodule update
cd backend
bundle install
# now create the development database into postgresql server
# then update DB_USER in config/application.yml
rake db:create db:migrate db:seed_fu

cd ../frontend
npm install
bower install
```

## Running (in development)

```bash
cd backend; rails s

# then, in a separate shell session:
cd frontend; npm start
```

# Development

Detailed information about the Rails backend and the Ember client are to be found in their own README files: [backend](https://github.com/thesponge/kep/tree/master/backend) / [frontend](https://github.com/thesponge/kep/tree/master/frontend).


You need to have a SMTP server set up in `backend/config/application.yml`

Authentication is done using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and Devise.
You can only log in from the ember app.

## License

License is [AGPLv3+](https://www.gnu.org/licenses/agpl-3.0.html) ([plain text version](https://www.gnu.org/licenses/agpl-3.0.txt)). Please see the COPYING file for more details.
