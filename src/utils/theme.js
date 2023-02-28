export const theme = {
  breakpoints: ['320px', '768px', '1440px'],
  colors: {
    mainDark: '#000000',
    mainLight: '#FFFFFF',
    secondaryDark: '#040A0A',
    signatureGreen: '#1F3A3A',
    signatureDark: '#0E2C2C',

    accentGreen: '#43FFD2',
    accentPink: '#D978AC',
    accentViolet: '#7D2253',

    inputEmpty: '#555555',
    inputDisabled: '#212121',
    errorRed: '#FF3A44',

    bannerGreen: '#31985A',
    bannerPink: '#D978AC',

    mainBgDark: '#282828',
    blockGradient: 'rgba(0, 0, 0, 0.2)',
  },
  fonts: {
    main: '"Oswald", sans-serif',
    headers: 'Cormorant',
    secondary: 'SuisseIntl',
    signature: 'Lotus',
  },
  fontWeights: [300, 400, 500, 600, 700],
  lineHeights: {
    main: '1.16',
    content: '1.29',
  },
  letterSpacings: {
    main: '0.1em',
    banners: '0.02em',
    headers: '0.02em',
    content: '0.04em',
  },

  borders: {
    btnStandart: '0.5px solid #FFFFFF',
    btnFocus: '0.5px solid #43FFD2',
    inputFilled: '1px solid #FFFFFF',
    inputEmpty: '1px solid #555555',
    inputDisabled: '1px solid #212121',
    inputError: '1px solid #FF3A44',
  },
  radii: {
    circle: '50%',
    tags: '40px',
    blocks: '20px',
  },
  transitions: {
    main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
