const _fontFamily = `
    -apple-system, BlinkMacSystemFont, "Segoe UI", 
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Hiragino Sans GB", "Microsoft Yahei", 
    "微软雅黑", Arial, Helvetica, STHeiti, sans-serif, 
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

export default {
    app: {
        textAlign: 'center'
    },
    appLogo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: '80px'
    },
    appHeader: {
        backgroundColor: '#222',
        height: '150px',
        padding: '20px',
        color: 'white'
    },
    appTitle: {
        fontSize: '1.5em'
    },
    appIntro: {
        width: '600px',
        margin: '20px auto',
        fontFamily: _fontFamily,
        fontSize: 'large'
    },
    error: {
        top: '100px'
    },
    contentPlaceholder: {
        minHeight: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '@keyframes App-logo-spin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
    }
};
