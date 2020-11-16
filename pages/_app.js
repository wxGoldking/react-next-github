import 'antd/dist/antd.css'
import './styles.css';
export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

MyApp.getInitialProps = async ({Component}) => {
  let pageProps = {}
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps();
  }
  return {
    pageProps
  };
}