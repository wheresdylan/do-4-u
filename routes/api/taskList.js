const router = require("express").Router();
const taskListController = require("../../controllers/taskListController");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const User = require("../../models/user");

require("dotenv").config();


const passportOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(
  passportOptions,
  (jwt_payload, done) => {
    User.findById(jwt_payload._id, (err, user) => {
      if(user){
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }
));

// Matches with /api/taskList
router.route("/")
  .get(passport.authenticate("jwt", {session: false}), taskListController.findAll)
  .post(passport.authenticate("jwt", {session: false}), taskListController.create);

  // Matches with /api/taskList/id
  router
  .route("/:id")
  .get(passport.authenticate("jwt", {session: false}), taskListController.findById)
  .put(passport.authenticate("jwt", {session: false}), taskListController.update)
  .delete(passport.authenticate("jwt", {session: false}), taskListController.remove);


module.exports = router;