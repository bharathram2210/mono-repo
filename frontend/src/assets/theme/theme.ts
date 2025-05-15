import { createTheme } from '@mui/material';
import { appColors } from './app-colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Josefin Sans',
        //  fontFamily: "PT Serif , serif",
    },
    palette: appColors,
});
