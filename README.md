# Stuck Overclone

* [Live Link](http://stuckoverclone.herokuapp.com/#/)
* [Design Docs](https://github.com/dmurchison/stuck_overclone_app/wiki)

## Table of Contents

* [About](#about)
* [Development Information](#development-information)
* [Developer Team](#developer-team)

## About

* Stuck Overclone is a clone of [Stack Overflow](https://stackoverflow.com/), I chose to build this website because I am passionate about coding education. With this web app, authorized users can search for, view, answer, upvote or downvote questions that other authorized users have previously posted. Most importantly, authorized users also have the ability to upvote or downvote answers as well.

### Question Show Page

![stuck-overclone4](https://user-images.githubusercontent.com/80483775/190946178-599d686b-3529-4116-a746-f17ad75842b4.png)

* The questions show page displays the question, votes and an answer form to write your own answers!
* Answers can have code blocks and votes as well.

### Login/Signup Page

![stuck-overclone3](https://user-images.githubusercontent.com/80483775/190945854-d54b9ba1-251f-4f70-a297-4b1e88c2d653.png)

* The signup page is a simple form to allow users to signup which will intern give them access to the features listed on the left side of the form.
* There is a link to signup the user or login if the user already has an account.

## Development Information

### Versions

* Ruby -v 2.7.5
* Rails -v 5.2.8
* Node -v 16.15.0
* NPM -v 8.5.5
* React -v 16.0.0

### System Dependencies

* Backend Rails Gems
  * terser
  * ransack
  * bcrypt
  * active_storage
  * jquery_rails
  * byebug
  * annotate
  * pry-rails
  * binding_of_caller
  * better_errors
  * capybara
* Middleware
  * JQuery
  * JBuilder
  * Redux
  * Angular
* Frontend
  * ReactJS
  * Remark-GFM
  * Webpack
  * Process
  * Moment
  * Babel

### Database Information

* PostgreSQL
* Rails Active Record
* [Schema](https://github.com/dmurchison/clonebnb_app/wiki/Database-Schema)

### Testing and Debugging

* RSpec
* Capybara
* Pry-Rails
* ByeBug

### Repository

* Cloning Instructions
  * `bundle install`
  * `npm install`
* Running Dev Env
  * IF you do not have a database:
    * `bundle exec rails db:create`
    * `bundle exec rails db:migrate`
    * `bundle exec rails db:seed`
  * `bundle exec rails server`
  * `npm run start`
* Running Tests
  * `bundle exec rspec`
  * `bundle exec rspec --format documentation`

## Developer Team

* [Duncan Murchison](https://www.duncanmurchison.dev/)
