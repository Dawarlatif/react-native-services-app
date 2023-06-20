
import { Provider } from 'react-redux';
import './config/firbase'

import RootNavigation from './navigation';
import { Store } from './redux/store';

export default function App() {


  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}
