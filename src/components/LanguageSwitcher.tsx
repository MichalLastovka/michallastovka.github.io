import { styled, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#000',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('/flag_cze.svg')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#aab4be',
                ...theme.applyStyles?.('dark', { backgroundColor: '#8796A5' }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('/flag_eng.svg')`,
        },
        ...theme.applyStyles?.('dark', { backgroundColor: '#003892' }),
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        borderRadius: 20 / 2,
        ...theme.applyStyles?.('dark', { backgroundColor: '#8796A5' }),
    },
}));

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Determine initial switch state based on current language
    const [checked, setChecked] = useState(i18n.language === 'en');

    useEffect(() => {
        setChecked(i18n.language === 'en');
    }, [i18n.language]);

    const handleChange = () => {
        const newLang = i18n.language === 'en' ? 'cz' : 'en';
        i18n.changeLanguage(newLang);
        setChecked(newLang === 'en');
    };

    return <StyledSwitch checked={checked} onChange={handleChange} />;
};