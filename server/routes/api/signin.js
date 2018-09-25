//npm run start:dev

const User =  require('../../models/User');
const UserSession = require('../../models/UserSession');
module.exports = (app) => {

  app.post('/api/account/signup', (res, req, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      dateofbirth,
      address,
      password
    } = body;

    let {
      email
    } = body;

    if(!firstName){
      return res.send({
        success: false,
        message: 'Error: First name cannot be blank.'
      })
    }

    if(!lastName){
      return res.send({
        success: false,
        message: 'Error: Last name cannot be blank.'
      })
    }

    if(!dateofbirth){
      return res.send({
        success: false,
        message: 'Error: Date of birth cannot be blank.'
      })
    }

    if(!address){
      return res.send({
        success: false,
        message: 'Error: Address cannot be blank.'
      })
    }

    if(!email){
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      })
    }

    if(!password){
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      })
    }

    email =  email.toLowerCase();

    //Verify User does not exist
    User.find({
      email: email
    }, (err, previousUsers) => {
      if(err){
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0 ) {
        return res.send({
          success: false,
          message: 'Error: Account already exits.'
        });
      }
      //Save User

      const newUser = new User();
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        } else {
          return res.send({
            success: true,
            message: 'Signed up'
          });
        }
      });
    });
  });


};
