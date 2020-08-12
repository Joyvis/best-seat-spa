import React from 'react'
import { Provider } from 'react-redux';
import { NavigationMenu } from 'components';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from 'store';

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <NavigationMenu />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
