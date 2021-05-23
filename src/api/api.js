const API_URL = 'https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json';

export const fetchData = () => fetch(API_URL).then((response) => response.json());
