import { MenuCategoryType } from '../enum/menu-category-types.enum';

export interface MenuCategory {
    id: string;
    title: string;
    image: string;
    categoryType: MenuCategoryType;
}
