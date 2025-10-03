import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config();

const secret = process.env.SECRET_TOKEN;

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!req.headers.authorization){
            return res.status(401).json({message: "Token requerido"})
        }
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth){
            //sign
            decodedData = jwt.verify(token, secret);
            req.userId = decodedData?.id
        } else {
            //google
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next()
    } catch (error) {
        res.status(401).json({message: "No autorizado"})
    }
}

export default auth;