import express from 'express';

import users from '../modles/users.js'

// const app = express();

const router = express.Router();

//all routes in here are starting with /users

// router.get('/', (req, res) => {
//     res.send('Hello..')
// });


router.route(`/add`).post((req, res) => {

    console.log(req.body)

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const password = req.body.password;

    const payload = new users({
        firstName,
        lastName,
        email,
        password
    })

    payload.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"user added successfully"
        })
    })


    }
)

export default router;


