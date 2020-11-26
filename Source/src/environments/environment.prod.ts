export const environment = {
  production: true,
  backends: {
    primary: {
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '7866a297c8f21ea63eb2756959872310'
    },
    secondary: {
      baseUrl: '',
      apiKey: ''
    },
    tertiary: {
      baseUrl: '',
      apiKey: ''
    }
    // ...
  }
};
