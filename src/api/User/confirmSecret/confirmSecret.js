import { prisma } from "../../../../generated/prisma-client";
import { generatorToken } from "../../../utils";

//이메일과 비밀키 인증작업 처리, 일치하지 않을 경우 에러
export default {
    Mutation : {
        confirmSecret: async(_, args) => {
            const {email, secret} = args;
            const user = await prisma.user( { email });
            if(user.loginSecret === secret) {
                //JWT
                return generatorToken(user.id);
            } else {
                throw Error("wrog email/secret combiation");
            }
        }
    }
}