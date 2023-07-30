// Here we will create dark and light theme variables

interface Theme {
  body: string;
  text: string;
  fontFamily: string;
  bodyRgba: string;
  textRgba: string;
}

export const lightTheme: Theme = {
  body: '#FCF6F4',
  text: '#000000',
  fontFamily: "'Poppins', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
};

export const DarkTheme = {
  body: '#000000',
  text: '#FCF6F4',
  fontFamily: "'Poppins', sans-serif",
  textRgba: '252, 246, 244',
  bodyRgba: '0,0,0',
};
