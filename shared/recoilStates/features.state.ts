import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { FeatureName } from '../enum/features.enum';
import { FeatureModel } from '../models/FeatureModel';

const { persistAtom } = recoilPersist();
export interface Feature {
    id: string;
    feature_type: FeatureName;
}

export const featuresResponseState = atom<Feature[]>({
    key: 'featuresResponse',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const allFeaturesState = selector({
    key: 'allFeatures',
    get: ({ get }): Array<Feature> => {
        const features = get(featuresResponseState);
        if (features.length) {
            const allFeatures: Array<Feature> = [];
            features.forEach((singleFeature: Feature) =>
                allFeatures.push(FeatureModel.fromFeatureResponse(singleFeature.id, singleFeature.feature_type))
            );
            return allFeatures;
        }
        return [];
    },
});
