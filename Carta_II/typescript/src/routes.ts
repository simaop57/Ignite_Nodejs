import {Request, Response} from 'express'
import CreateCourse from './CreateCourseService'

export function createCourse(request: Request, response: Response) {
    CreateCourse.execute({
        educator: "Luiz",
        name: "Animation",
        duration: 12,
    })

    CreateCourse.execute({
        educator: "Fátima",
        name: "Draw",
    })

    return response.send()
}
