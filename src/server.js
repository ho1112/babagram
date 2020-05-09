import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(__dirname, ".env") });

import { GraphQLServer} from "graphql-yoga"; //graphql-yoga에서 graphql서버를 가져온다
import logger from "morgan";
import schema from "./schema"
import {sendSecretMail} from "./utils"

sendSecretMail("carrien1112@gmail.com", "123");

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });
//GraphQLServer의 내장 express가 morgan logger를 사용하도록 설정
server.express.use(logger("dev"));

server.start({port:PORT}, () => 
    console.log(`Server running on http://localhost: ${PORT}`)
);

