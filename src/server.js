require("dotenv").config();
import { GraphQLServer} from "graphql-yoga"; //graphql-yoga에서 graphql서버를 가져온다
import logger from "morgan";
import schema from "./schema"

const PORT = process.env.PORT || 4000;



const server = new GraphQLServer({ schema });
//GraphQLServer의 내장 express가 morgan logger를 사용하도록 설정
server.express.use(logger("dev"));

server.start({port:PORT}, () => 
    console.log(`Server running on http://localhost: ${PORT}`)
);

