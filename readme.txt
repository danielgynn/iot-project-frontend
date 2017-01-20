Daniel Gynn (djg44) IoT Project - Assessment 05
--------------------------------------------------------------------------------
This system is designed to alert a user when their plant needs watering. The
galvanic cell sensors record the moisture levels from the plant bed and report
these to the MQTT server. When this reading reaches a set point, a web
notification is sent to remind the user to water their plant.

The frontend application allows an authenticated user to see data visualisations
from the sensor readings. Data is presented in a line graph to display how the
data has changed over time.

Marketing Criteria
--------------------------------------------------------------------------------

1. Completeness

The plan has been revised a little, changing Bluetooth notifications to Chrome
notifications, but other than that the project is built completely to match the
original plan.

2. Coding

The code base uses common patterns for Node.js, is clean and maintainable, and
is heavily commented throughout.

3. Data Collection

Sensor readings are collected effectively and user authentication data is stored
in a MongoDB instance.

4. Actuation

A Chrome web notifications when sensor detects that the plant needs watering, or
if it has just been watered.

5. Visualisation

Data is visualised using a line graph (Chart.js) that displays the changes to
the plant moisture levels over time.

6. Processing

The data is processed to a value that is readable and can be presented logically
in a graph visualisation.

7. Video Link

https://www.youtube.com/watch?v=075wHwFt7KM&feature=youtu.be

Optional Marking Criteria
--------------------------------------------------------------------------------

Security: User authentication has been built in to only allow users to access
the MQTT readings and data visualisations if they are authenticated to the
project.

Project Structure
--------------------------------------------------------------------------------

The project is a node.js application, built with Express, that allows users to
authenticate and view the data visualisations for the moisture sensor.

iot-frontend/ - main project directory for frontend application.

  app.js - contains the main configurations for the node server.

  gulpfile.js - contains simple build tasks to compile sass and minify css.

  package.json/bower.json - contains references and configurations for
  third-party libraries used in the project.

  config/database.js - contains MongoDB configurations.

  config/passport.js - contains Passport configurations for allowing local
  authentication.

  models/user.js - contains data model for users.

  public/sass/*.scss - contains sass pre-processor code.

  public/stylesheets/main.css - compiled css for the webpage.

  routes/index.js - contains the Express routing configurations.

  public/javascripts/index.js - contains code to connect to MQTT, update the
  graph data and send notifications to the user.

  public/javascripts/linegraph.js - contains configurations to create a new
  Chart.js line graph and update the data displayed.

  public/javascripts/mqtt.min.js - minified version of the MQTT.js library.

  views/*.hbs - contains all HTML/Handlebars templates.

  Libraries used:
  - https://www.npmjs.com/package/bcrypt
  - https://www.npmjs.com/package/body-parser
  - https://www.npmjs.com/package/cookie-parser
  - https://www.npmjs.com/package/debug
  - https://www.npmjs.com/package/ejs
  - https://www.npmjs.com/package/express
  - https://www.npmjs.com/package/express-dynamic-helpers-patch
  - https://www.npmjs.com/package/express-hbs
  - https://www.npmjs.com/package/express-session
  - https://www.npmjs.com/package/gulp
  - https://www.npmjs.com/package/gulp-minify-css
  - https://www.npmjs.com/package/gulp-sass
  - https://www.npmjs.com/package/mongoose
  - https://www.npmjs.com/package/morgan
  - https://www.npmjs.com/package/mqtt
  - https://www.npmjs.com/package/passport
  - https://www.npmjs.com/package/passport-local
  - https://www.npmjs.com/package/require
  - https://libraries.io/bower/bulma
  - https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.min.js

mbed/
  main.cpp - contains the MBED application (slightly modified from last
  submission).
