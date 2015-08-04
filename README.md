[![Stories in Ready](https://badge.waffle.io/thesponge/kep.png?label=ready&title=Ready)](https://waffle.io/thesponge/kep)



# Introduction

# Knowledge Exchange Platform (KEP)

The free software Knowledge Exchange Platform (KEP) is designed as the one stop shop, where interdisciplinary groups or networks, can find exciting assignments (money, barter, dinner) or exchange relevant information in an open and collaborative way.

KEP is constantly fed with information by it's users. Users are motivated to use KEP because it creates a marketplace where members can post assignments(jobs) and resources (info) and have their needs/skills mixed and matched. Everybody wins!

We are also throwing a bundle of task centric tools into the mix, to make the launching of a collaborative investigative project as easy and inclusive as starting to play a game.

The marketplace was build with the investigative journalism field in mind. Projects related to the fields of activism, fixing, coding, mapping, design can also be fused here.

--------

# Installation

```bash
git clone https://github.com/thesponge/kep
cd kep
git submodule init
git submodule update
cd backend
#install bundler(http://bundler.io/) or another dependency manager
#if you chose bundler,run the following line:
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

Detailed information about the Rails backend and the Ember client are to be found in their own README files: [backend](https://github.com/thesponge/kep-backend) / [frontend](https://github.com/thesponge/kep-frontend).


You need to have a SMTP server set up in `backend/config/application.yml`

Authentication is done using [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) and Devise.
You can only log in from the ember app.

## License

License is [AGPLv3+](https://www.gnu.org/licenses/agpl-3.0.html) ([plain text version](https://www.gnu.org/licenses/agpl-3.0.txt)). Please see the COPYING file for more details.
