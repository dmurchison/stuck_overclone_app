# Bugs And Fixes



## 1.
- ### Bug
  - Unable to push to heroku after Adding gem 'ransack' to gemfile.
  - ```sh
    Error FAILED: http://docs.heroku.com/bundler
    !     Heroku push rejected, failed to install gems via Bundler
- ### Fix
  - https://stackoverflow.com/questions/4574176/heroku-push-rejected-failed-to-install-gems-via-bundler
  - `x86_64-darwin-16` or `x86_64-linux` For macOS uploads after updating gemfile.


## 2.
- ### Bug
  - Cannot push to heroku after adding new npm dependecies.
- ### Fix
  - Switch from Uglifier to 'terser'


## 3.
- ### Bug
  - Requests were not including the csrf token
- ### Fix
  - Moved JQUERY up to the top of my application.js file


## 4.
- ### Bug
  - User Model searching for username with the find_by method
- ### Fix
  - Validated email so needed to make that me searching reference


## 5. 
- ### Bug
  - Logout button was logging an error for the for (unable to read push; Property undefined)
- ### Fix
  - Changed the session_reducer from rendering a _nulluser on the logout action to an empty object.


## 6.
- ### Bug
  - Session would stay active after refresh, user information was not rendering on the frontend.
- ### Fix
  - window.currentUser function in root.html.erb was incorrect.
  - refactored user views.


## Features to add in future:
- Question Tags
- View Counter
