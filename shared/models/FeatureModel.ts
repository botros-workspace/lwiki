/* eslint-disable camelcase */

import { FeatureName } from '../enum/features.enum';

export interface FeatureResponse {
    id: string;
    feature_type: string;
}
export interface Business {
    id: string;
    feature_type: FeatureName;
}
export class FeatureModel {
    constructor(public id: string, public feature_type: FeatureName) {}

    static fromFeatureResponse(id: string, feature_type: string) {
        let new_feature_type: FeatureName = FeatureName.UNDEFINED_FEATURE;
        if (feature_type === 'ANIMAL_FRIENDLY') {
            new_feature_type = FeatureName.ANIMAL_FRIENDLY as FeatureName;
        } else if (feature_type === 'BACK_GARDEN') {
            new_feature_type = FeatureName.BACK_GARDEN as FeatureName;
        } else if (feature_type === 'BAR') {
            new_feature_type = FeatureName.BAR as FeatureName;
        } else if (feature_type === 'BEACH_BAR') {
            new_feature_type = FeatureName.BEACH_BAR as FeatureName;
        } else if (feature_type === 'BEACH_TABELS') {
            new_feature_type = FeatureName.BEACH_TABELS as FeatureName;
        } else if (feature_type === 'BLIND_PEOPLE_FRIENDLY') {
            new_feature_type = FeatureName.BLIND_PEOPLE_FRIENDLY as FeatureName;
        } else if (feature_type === 'CATERING') {
            new_feature_type = FeatureName.CATERING as FeatureName;
        } else if (feature_type === 'CITY_CENTER') {
            new_feature_type = FeatureName.CITY_CENTER as FeatureName;
        } else if (feature_type === 'DANCE_FLOOR') {
            new_feature_type = FeatureName.DANCE_FLOOR as FeatureName;
        } else if (feature_type === 'DELIVERY') {
            new_feature_type = FeatureName.DELIVERY as FeatureName;
        } else if (feature_type === 'DINING_ROOM') {
            new_feature_type = FeatureName.DINING_ROOM as FeatureName;
        } else if (feature_type === 'DRIVE_THROUGH') {
            new_feature_type = FeatureName.DRIVE_THROUGH as FeatureName;
        } else if (feature_type === 'ELEVATOR') {
            new_feature_type = FeatureName.ELEVATOR as FeatureName;
        } else if (feature_type === 'FOOD_PICK_UP') {
            new_feature_type = FeatureName.FOOD_PICK_UP as FeatureName;
        } else if (feature_type === 'GAMING_AREA') {
            new_feature_type = FeatureName.GAMING_AREA as FeatureName;
        } else if (feature_type === 'GARDEN') {
            new_feature_type = FeatureName.GARDEN as FeatureName;
        } else if (feature_type === 'HIGH_TABELS') {
            new_feature_type = FeatureName.HIGH_TABELS as FeatureName;
        } else if (feature_type === 'KIDS_AREA') {
            new_feature_type = FeatureName.KIDS_AREA as FeatureName;
        } else if (feature_type === 'KIDS_FRIENDLY') {
            new_feature_type = FeatureName.KIDS_FRIENDLY as FeatureName;
        } else if (feature_type === 'LACK_VIEW') {
            new_feature_type = FeatureName.LACK_VIEW as FeatureName;
        } else if (feature_type === 'LIVE_BAND') {
            new_feature_type = FeatureName.LIVE_BAND as FeatureName;
        } else if (feature_type === 'LIVE_DJ') {
            new_feature_type = FeatureName.LIVE_DJ as FeatureName;
        } else if (feature_type === 'LIVE_MUSIC') {
            new_feature_type = FeatureName.LIVE_MUSIC as FeatureName;
        } else if (feature_type === 'LIVE_SHOW') {
            new_feature_type = FeatureName.LIVE_SHOW as FeatureName;
        } else if (feature_type === 'MOUNTAIN_VIEW') {
            new_feature_type = FeatureName.MOUNTAIN_VIEW as FeatureName;
        } else if (feature_type === 'PANORAMA_VIEW') {
            new_feature_type = FeatureName.PANORAMA_VIEW as FeatureName;
        } else if (feature_type === 'PARKING_AREA') {
            new_feature_type = FeatureName.PARKING_AREA as FeatureName;
        } else if (feature_type === 'PARKING_ASSISTANCE') {
            new_feature_type = FeatureName.PARKING_ASSISTANCE as FeatureName;
        } else if (feature_type === 'POOL') {
            new_feature_type = FeatureName.POOL as FeatureName;
        } else if (feature_type === 'POOL_TABELS') {
            new_feature_type = FeatureName.POOL_TABELS as FeatureName;
        } else if (feature_type === 'POOL_VIEW') {
            new_feature_type = FeatureName.POOL_VIEW as FeatureName;
        } else if (feature_type === 'PRIVATE_TABELS') {
            new_feature_type = FeatureName.PRIVATE_TABELS as FeatureName;
        } else if (feature_type === 'RIVER_VIEW') {
            new_feature_type = FeatureName.RIVER_VIEW as FeatureName;
        } else if (feature_type === 'ROOF_TOP') {
            new_feature_type = FeatureName.ROOF_TOP as FeatureName;
        } else if (feature_type === 'SAND_AREA') {
            new_feature_type = FeatureName.SAND_AREA as FeatureName;
        } else if (feature_type === 'SEA_VIEW') {
            new_feature_type = FeatureName.SEA_VIEW as FeatureName;
        } else if (feature_type === 'SENIORS_FRIENDLY') {
            new_feature_type = FeatureName.SENIORS_FRIENDLY as FeatureName;
        } else if (feature_type === 'STANDING_TABELS') {
            new_feature_type = FeatureName.STANDING_TABELS as FeatureName;
        } else if (feature_type === 'TERRACE') {
            new_feature_type = FeatureName.TERRACE as FeatureName;
        } else if (feature_type === 'UNDER_WATER') {
            new_feature_type = FeatureName.UNDER_WATER as FeatureName;
        } else if (feature_type === 'WHEEL_CHAIR_FRIENDLY') {
            new_feature_type = FeatureName.WHEEL_CHAIR_FRIENDLY as FeatureName;
        }

        return new FeatureModel(id, new_feature_type);
    }
}
