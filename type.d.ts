import type { imageSourcePropType} from "react-native";

declare global {
    interface ImageRequireSource {
        focused: boolean;
        icon: imageSourcePropType;
    }
}

export {};