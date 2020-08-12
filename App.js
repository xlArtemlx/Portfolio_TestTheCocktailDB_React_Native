import React from 'react';
import {CocktailService} from './src/services/coctails-service';
import { AppNavigation } from './src/Navigation/AppNavigation';

const App: () => props = () => {
  return (
    <CocktailService>
      <AppNavigation />
    </CocktailService>
  );
};

export default App;