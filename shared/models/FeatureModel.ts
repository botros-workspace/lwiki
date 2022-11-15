/* eslint-disable camelcase */

import { FeatureName } from '../enum/feature-types.enum';

export class FeatureModel {
    constructor(public id: string, public feature_type: FeatureName) {}

    static fromFeatureResponse(id: string, feature_type: string) {
        return new FeatureModel(id, getFeatureName(feature_type));
    }
}

export function getFeatureName(featureName: string): FeatureName {
    if (featureName === 'ANIMAL_FRIENDLY') {
        return FeatureName.ANIMAL_FRIENDLY as FeatureName;
    }
    if (featureName === 'BACK_GARDEN') {
        return FeatureName.BACK_GARDEN as FeatureName;
    }
    if (featureName === 'BAR') {
        return FeatureName.BAR as FeatureName;
    }
    if (featureName === 'BEACH_BAR') {
        return FeatureName.BEACH_BAR as FeatureName;
    }
    if (featureName === 'BEACH_TABELS') {
        return FeatureName.BEACH_TABELS as FeatureName;
    }
    if (featureName === 'BLIND_PEOPLE_FRIENDLY') {
        return FeatureName.BLIND_PEOPLE_FRIENDLY as FeatureName;
    }
    if (featureName === 'CATERING') {
        return FeatureName.CATERING as FeatureName;
    }
    if (featureName === 'CITY_CENTER') {
        return FeatureName.CITY_CENTER as FeatureName;
    }
    if (featureName === 'DANCE_FLOOR') {
        return FeatureName.DANCE_FLOOR as FeatureName;
    }
    if (featureName === 'DELIVERY') {
        return FeatureName.DELIVERY as FeatureName;
    }
    if (featureName === 'DINING_ROOM') {
        return FeatureName.DINING_ROOM as FeatureName;
    }
    if (featureName === 'DRIVE_THROUGH') {
        return FeatureName.DRIVE_THROUGH as FeatureName;
    }
    if (featureName === 'ELEVATOR') {
        return FeatureName.ELEVATOR as FeatureName;
    }
    if (featureName === 'FOOD_PICK_UP') {
        return FeatureName.FOOD_PICK_UP as FeatureName;
    }
    if (featureName === 'GAMING_AREA') {
        return FeatureName.GAMING_AREA as FeatureName;
    }
    if (featureName === 'GARDEN') {
        return FeatureName.GARDEN as FeatureName;
    }
    if (featureName === 'HIGH_TABELS') {
        return FeatureName.HIGH_TABELS as FeatureName;
    }
    if (featureName === 'KIDS_AREA') {
        return FeatureName.KIDS_AREA as FeatureName;
    }
    if (featureName === 'KIDS_FRIENDLY') {
        return FeatureName.KIDS_FRIENDLY as FeatureName;
    }
    if (featureName === 'LACK_VIEW') {
        return FeatureName.LACK_VIEW as FeatureName;
    }
    if (featureName === 'LIVE_BAND') {
        return FeatureName.LIVE_BAND as FeatureName;
    }
    if (featureName === 'LIVE_DJ') {
        return FeatureName.LIVE_DJ as FeatureName;
    }
    if (featureName === 'LIVE_MUSIC') {
        return FeatureName.LIVE_MUSIC as FeatureName;
    }
    if (featureName === 'LIVE_SHOW') {
        return FeatureName.LIVE_SHOW as FeatureName;
    }
    if (featureName === 'MOUNTAIN_VIEW') {
        return FeatureName.MOUNTAIN_VIEW as FeatureName;
    }
    if (featureName === 'PANORAMA_VIEW') {
        return FeatureName.PANORAMA_VIEW as FeatureName;
    }
    if (featureName === 'PARKING_AREA') {
        return FeatureName.PARKING_AREA as FeatureName;
    }
    if (featureName === 'PARKING_ASSISTANCE') {
        return FeatureName.PARKING_ASSISTANCE as FeatureName;
    }
    if (featureName === 'POOL') {
        return FeatureName.POOL as FeatureName;
    }
    if (featureName === 'POOL_TABELS') {
        return FeatureName.POOL_TABELS as FeatureName;
    }
    if (featureName === 'POOL_VIEW') {
        return FeatureName.POOL_VIEW as FeatureName;
    }
    if (featureName === 'PRIVATE_TABELS') {
        return FeatureName.PRIVATE_TABELS as FeatureName;
    }
    if (featureName === 'RIVER_VIEW') {
        return FeatureName.RIVER_VIEW as FeatureName;
    }
    if (featureName === 'ROOF_TOP') {
        return FeatureName.ROOF_TOP as FeatureName;
    }
    if (featureName === 'SAND_AREA') {
        return FeatureName.SAND_AREA as FeatureName;
    }
    if (featureName === 'SEA_VIEW') {
        return FeatureName.SEA_VIEW as FeatureName;
    }
    if (featureName === 'SENIORS_FRIENDLY') {
        return FeatureName.SENIORS_FRIENDLY as FeatureName;
    }
    if (featureName === 'STANDING_TABELS') {
        return FeatureName.STANDING_TABELS as FeatureName;
    }
    if (featureName === 'TERRACE') {
        return FeatureName.TERRACE as FeatureName;
    }
    if (featureName === 'UNDER_WATER') {
        return FeatureName.UNDER_WATER as FeatureName;
    }
    if (featureName === 'WHEEL_CHAIR_FRIENDLY') {
        return FeatureName.WHEEL_CHAIR_FRIENDLY as FeatureName;
    }
    return FeatureName.UNDEFINED_FEATURE as FeatureName;
}
