# Technical Documentation

## Overview

Stuck Overclone is a web application that replicates the functionality of Stack Overflow. It is built using a Rails backend and a React frontend. This document provides technical details about the project's architecture, setup, and key components.

## Table of Contents

1. [Architecture](#architecture)
2. [Setup Instructions](#setup-instructions)
3. [Backend (Rails)](#backend-rails)
4. [Frontend (React)](#frontend-react)
5. [Stripe Integration](#stripe-integration)
6. [Testing](#testing)
7. [Code Quality](#code-quality)

## Architecture

The application follows a typical MVC (Model-View-Controller) architecture for the Rails backend and a component-based architecture for the React frontend. The backend handles API requests, database interactions, and business logic, while the frontend handles user interactions and UI rendering.

## Setup Instructions

### Prerequisites

- Ruby 2.7.5
- Rails 5.2.8
- Node 16.15.0
- NPM 8.5.5
- PostgreSQL

### Cloning the Repository

```sh
git clone https://github.com/dmurchison/stuck_overclone_app.git
cd stuck_overclone_app
```

### Installing Dependencies

```sh
bundle install
npm install
```

### Setting Up the Database

```sh
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Running the Development Environment

```sh
bundle exec rails server
npm start
```

### Running Tests

```sh
bundle exec rspec
bundle exec rspec --format documentation
```

## Backend (Rails)

- Ruby -v 2.7.5
- Rails -v 5.2.8

### Key Gems

- `terser`
- `ransack`
- `bcrypt`
- `active_storage`
- `jquery_rails`
- `byebug`
- `annotate`
- `pry-rails`
- `binding_of_caller`
- `better_errors`
- `capybara`

### API Endpoints

The backend exposes several API endpoints for managing questions, answers, users, and votes. These endpoints follow RESTful conventions.

### Models

- User: Represents a user in the system.
- Question: Represents a question posted by a user.
- Answer: Represents an answer to a question.
- Vote: Represents a vote on a question or answer.

## Frontend (React)

- Node -v 16.15.0
- NPM -v 8.5.5
- React -v 16.0.0

### Key Libraries

- ReactJS
- Remark-GFM
- Webpack
- Process
- Moment
- Babel

### Components

- QuestionShowPage: Displays a question and its answers.
- LoginSignupPage: Provides forms for user login and signup.
- AnswerForm: Allows users to submit answers to questions.
- VoteButton: Allows users to upvote or downvote questions and answers.

### State Management

The frontend uses Redux for state management. Actions and reducers are defined for managing the state of questions, answers, users, and votes.

### Middleware

- JQuery
- JBuilder
- Redux
- Angular

### Database Information

- PostgreSQL
- Rails Active Record
- [Schema](/db/schema.rb)

### Testing and Debugging

- RSpec
- Capybara
- Pry-Rails
- ByeBug

```sh
bundle exec rspec
bundle exec rspec --format documentation
```

### Code Quality

The project uses RuboCop for linting and Prettier for code formatting. These tools help maintain code quality and consistency across the codebase.

```sh
bundle exec rubocop
npm run format
```
