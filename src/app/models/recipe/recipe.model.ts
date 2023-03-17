import { Digest } from "./digest.model";
import { Ingredient } from "./ingredient.model";
import { InlineModel1 } from "./inline-model-1.model";
import { NutrientsInfo } from "./nutrients-info.model";

export interface Recipe {
    uri?: string;
    label?: string;
    image?: string;
    images?: InlineModel1;
    source?: string;
    url?: string;
    shareAs?: string;
    yield?: number;
    dietLabels?: Array<string>;
    healthLabels?: Array<string>;
    cautions?: Array<string>;
    ingredientLines?: Array<string>;
    ingredient?: Array<Ingredient>;
    calories?: number;
    glycemicIndex?: number;
    totalWeight?: number;
    cuisineType?: Array<string>;
    mealType?: Array<string>;
    dishType?: Array<string>;
    instructions?: Array<string>;
    tags?: Array<string>;
    externalId?: string;
    totalNutrients?: NutrientsInfo;
    totalDaily?: NutrientsInfo;
    digest?: Digest;

}