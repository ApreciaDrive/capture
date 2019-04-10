import { ItemModel } from './item.model';

export interface CategoryModel {
  id: number;
  name: string;
  items: ItemModel[];
}
