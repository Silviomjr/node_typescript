import { Request, Response } from "express"
import CreateCourseService from "./CreateCourseService"; './CreateCourseService';

export function createCourse(request : Request, response : Response) {

    CreateCourseService.execute({
        name: 'NodeJS', 
        
        educator: 'Silvio'
    })

    return response.send()

}