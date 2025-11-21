import {designLogo, fastLogo, privacyLogo, respiratingLogo, responsiveLogo} from "../components/svgFiles.tsx";


export const appsData = [
    {
        appName: "Respirating",
        logo: respiratingLogo,
        slogan: "respirating_slogan",
        privacyPolicy: "public",
        description: "respirating_description_short",
        pathToImage: "/respirating_mockup.png",
        whatCollect: "respirating_privacy_policy_what_collect",
        howUse: "respirating_privacy_policy_how_use",
        store: "respirating_privacy_policy_store",
        sharing: "respirating_privacy_policy_sharing",
        keyFeatures: [
            {
                feature: "respirating_feature_fast",
                icon: fastLogo
            },
            {
                feature: "respirating_feature_design",
                icon: designLogo
            },
            {
                feature: "respirating_feature_responsive",
                icon: responsiveLogo
            },
            {
                feature: "respirating_feature_privacy",
                icon: privacyLogo
            },
        ]

    }
]