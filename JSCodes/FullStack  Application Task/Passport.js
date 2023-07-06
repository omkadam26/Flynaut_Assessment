// Install required dependencies: passport, passport-local
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Configure Passport.js
passport.use(
  new LocalStrategy((username, password, done) => {
    // Check username and password against your database or any other authentication logic
    if (username === 'admin' && password === 'password') {
      return done(null, { id: 1, username: 'admin' });
    } else {
      return done(null, false, { message: 'Invalid username or password' });
    }
  })
);

// Use Passport.js middleware in your routes
app.post('/login', passport.authenticate('local'), (req, res) => {
  // Successful authentication
  res.send('Logged in successfully');
});
