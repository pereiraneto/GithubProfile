import { User } from "../models/user.interface";

const UserList: User[] = [
    {
        name: "Pereira",
        company: "Le@d",
        location: "Fortaleza-CE",
        bio: "Go Angular and go Ionic",
        avatar_url:"http://i.imgur.com/jav62p6.jpg",
        email: "pereira@pereira.com"
    },
    {
        name: "John",
        company: "Doe Co.",
        location: "Longo, UK",
        bio: "Go go go go !!",
        avatar_url:"http://i.imgur.com/TzWcihb.png",
        email: "doe@john.com"
    }
]

export const USER_LIST = UserList;