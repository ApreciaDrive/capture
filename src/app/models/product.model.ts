import { CategoryModel } from './categories.model';
export interface ProductModel {
    id: number;
    name: string;
    categories: CategoryModel[];
}
