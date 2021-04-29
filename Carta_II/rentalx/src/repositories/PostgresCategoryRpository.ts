import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
    return null
  }
  list(): Category[] {
    return null
  }
  findByName(name: string): Category {
    console.log(name)
    return null
  }
}

export { PostgresCategoryRepository }