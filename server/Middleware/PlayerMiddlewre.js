
function logDetails(req, res, next) {
    req.session.PlayerSession = req.body
    req.session.PlayerSession.loginDate = Date.now()
    req.session.PlayerSession.level = "TutorialLevel"
    console.log(req.sessionID);
    
    next()
  }

  


  
  function logOutDetails(req, res, next) {
    const cookies = req.headers.cookie
    console.log('cookies',cookies)
    console.log('logout');
    console.log(req.session);
    console.log(req.sessionID);
    if (req.session && req.session.PlayerSession) {
      const loginDate = req.session.PlayerSession.loginDate;
      const logoutDate = Date.now();
      
      // Calculate session duration in milliseconds
      const sessionDuration = logoutDate - loginDate;
      
      // Log session data and duration
      console.log("Session Data:", req.session.PlayerSession);
      console.log("Session Duration (ms):", sessionDuration);
    } else {
        console.log(' not connected to session');
    }
    
    next();
  }
  

  module.exports = {logDetails,logOutDetails}