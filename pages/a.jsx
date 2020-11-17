import { useRouter } from 'next/router'
import styles from './a.module.scss';
const A = ({a, b}) =>{
  const router = useRouter();
  const {aaa} = router.query;
  return <h2 className={styles.red}>
    A Page {aaa} {a} {b}
  </h2>
}

A.getInitialProps = () => {
  return {
    a: 1,
    b: 2
  }
}

export default A;