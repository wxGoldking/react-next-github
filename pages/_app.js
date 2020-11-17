import App from 'next/app';
import 'antd/dist/antd.css'
import './styles.css';
export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}