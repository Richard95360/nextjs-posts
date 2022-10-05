
import MyLayout from '../components/MyLayout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
   
  
  )
}

export default MyApp
