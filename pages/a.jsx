import { useRouter } from 'next/router'

const A = ({a, b, state}) =>{
  const router = useRouter();
  const {aaa} = router.query;
  return <h2>
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