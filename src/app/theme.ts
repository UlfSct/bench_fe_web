import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6E9FC4', // пыльный приглушённый синий
            contrastText: '#0F1419',
        },
        secondary: {
            main: '#8FB89A', // пастельный шалфейный
            contrastText: '#0F1419',
        },
        background: {
            default: '#14181D', // глубокий графит
            paper: '#1C2228', // панели чуть светлее
        },
        text: {
            primary: '#D9DEE3', // не чисто белый, мягкий
            secondary: '#7A838D', // приглушённый серый
        },
        divider: '#242B32',
        error: {
            main: '#C27A7A', // пыльный красный
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 14,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#14181D',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});

// цвета для сообщений — отдельно от MUI palette
export const chatColors = {
    incoming: '#212830', // входящие, чуть светлее фона
    outgoing: '#2E3B47', // исходящие, приглушённый сине-серый
    incomingText: '#D9DEE3',
    outgoingText: '#E4E9EE',
};
