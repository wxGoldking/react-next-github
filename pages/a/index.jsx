import { useRouter } from 'next/router'
import {useState} from 'react';
// import {Button} from 'antd';
import styles from './a.module.scss';
const A = ({a, b}) => {
  const router = useRouter();
  const [state, setstate] = useState('');
  const {aaa} = router.query;
  const clickDynamicImport = async (e) => {
    // antd中引入了moment， 所以想要看到异步加载不要import antd组件
    const moment = (await import('moment')).default;
    setstate(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }
  return <div>
    <h2 className={styles.red}>
    A Page {aaa} {a} {b} {state}
  </h2>
  <button onClick={clickDynamicImport}>11</button>
  </div>
}

A.getInitialProps = () => {
  return {
    a: 1,
    b: 2
  }
}

export default A;