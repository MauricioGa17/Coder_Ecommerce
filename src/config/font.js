import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Italic': require('../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
    'Roboto': require('../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
    'BitcountGridDouble': require('../../assets/fonts/BitcountGridDouble-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf'),
  });
};