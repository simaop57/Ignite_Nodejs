/**
 * name: string
 * duration: number
 * educator: string
 */

interface Course {
    name: string;
    duration?: number;
    educator: string
}

class CreateCourse {
    execute({ name, educator, duration = 8 }: Course) {
        return console.log(educator, duration, name)
    }
}

export default new CreateCourse()