import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";


const repositoryList: Repository[] = [
    {
        name: "Repository One",
        description: "Fist Repository",
        owner: USER_LIST[0]
    },
    {
        name: "Repository Two",
        description: "Second Repository",
        owner: USER_LIST[1]
    }
]

export const REPOSITORY_LIST = repositoryList;