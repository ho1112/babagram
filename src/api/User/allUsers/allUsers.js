import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        allUsers : () =>
            prisma.users() //prisma.users()는 prisma제공 함수, 모든 사용자 정보를 가져온다.
        }
}