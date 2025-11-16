import {Box, Tooltip, useTheme} from '@mui/material';
import type {JSX} from "react";
import {top} from "@popperjs/core";


interface CustomSVGProps {
    tooltip?: string;
    svgRef: JSX.Element;
    width: number;
    height: number;
}

export const CustomSVG = (props: CustomSVGProps) => {
    const theme = useTheme();
    return (
        <Tooltip placement={top} arrow={true} title={props.tooltip}>
            <Box

                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: props.width,
                    height: props.height,
                    '& svg': {
                        width: '100%',
                        height: '100%',
                        fill: theme.palette.primary.main // dynamic color from theme
                    },
                }}
            >
                {props.svgRef}
            </Box>
        </Tooltip>

    );
};