import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>{/*any thing you warp in passes as props i.e this component is passed as props */}
        <Toaster />
        <Component {...pageProps} />  {/*this component is the page we are current veiw on the browser i.e it render the dynamic component */}
      </Layout>
    </StateContext>
  )
}

