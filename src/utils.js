import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(__dirname, ".env") });

import { adjectives, nouns } from "./words"
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport"
import jwt from "jsonwebtoken"


export const generatorSecret = () => {
    const randowNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randowNumber]} ${nouns[randowNumber]}`;
};

console.log(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD)

const sendMail = (email) => {
    const options = {
        auth: {
          api_user: process.env.SENDGRID_USERNAME,
          api_key: process.env.SENDGRID_PASSWORD
        }
      };
      const client = nodemailer.createTransport(sgTransport(options));
      return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
    const email = {
        from : "carrien1112@gmail.com",
        to: adress,
        subject : "Login Secret for babagram",
        html : `Thank you! Your login secret it <b>${secret}</b> <br> Copy paste on the app/website to log in`
    };
    return sendMail(email);
}

//토큰 생성
export const generatorToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET);