const passport = require('passport');


module.exports = (app) => {

  /////
  // GOOGLE
  /////

  //initial login
  app.get('/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  //callback w/ token
  app.get('/auth/google/callback', 
    passport.authenticate('google', {
      failureRedirect: '/login'
    }),
    (req, res) => { 
      res.redirect('/') 
    }
  );

  /////
  // TWITTER
  /////

  //initial login
  app.get('/auth/twitter', 
    passport.authenticate('twitter')
  );

  //callback w/ token
  app.get("/auth/twitter/callback", 
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }),
    (req, res) => { 
      res.redirect('/') 
    }
  );
  
  /////
  // GITHUB
  /////
  
  //initial login
  app.get('/auth/github', 
    passport.authenticate('github')
  );
  
  //callback w/ token
  app.get("/auth/github/callback", 
    passport.authenticate('github', {
      failureRedirect: '/login'
    }),
    (req, res) => { 
      res.redirect('/') 
    }
  );

  /////
  // TESTS
  /////
  
  // logout
  app.get("/api/logout", (req, res) => {
    console.log(req.user)
    req.logout();
    res.redirect("/");
  })

  //testing user authenticate
  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  })
  
} //end export
