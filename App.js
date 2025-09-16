import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

//Store Redux
import { store } from './src/redux/store';

//Importacion de fuentes
import { loadFonts } from './src/config/font';

//Navigation
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAllFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAllFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Cargando fuentes...</Text>;
  }

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

export default App;
