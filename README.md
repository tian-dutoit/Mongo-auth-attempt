Lightning Talks

Install

After cloning this repo, from the repo's folder:

yarn

yarn dev

You can access the page at localhost:3000

The project uses mongoDB and is connected in server/server.js to a database called 'lightning' -

//server.js

 mongoose.connect('mongodb://localhost/lightning')

There are models for two collections - 'users' and 'posts'.

Users can regsiter and login and authentication is done with JWTs. Logging out should remove the JWT from local storage. A JWT token must be in local storage in order for a user to increase the like total. User passwords are hashed using sodium. 

Testing is currently a work in progress. 