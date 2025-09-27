import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import User from "../models/user.js";


/* login ya con usuario existente */
export const signin = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});
        const token = jwt.sign({email: existingUser, id: existingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
    }
}


/* registrarse */
export const signup = async(req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body

    try {
        /* existe el usuario? */
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(404).json({message: "Usuario ya existe"})
        /* verificacion de password y confirmPassword */
        if(password !== confirmPassword) return res.status(400).json({message: "Password no coincide..verificalo!!"})
        /* encriptar password */
        const hashedPassword = await bcrypt.hash(password, 12);
        /* crear usuario */
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "1h"})
        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: "Algo fallo"})
    }
}