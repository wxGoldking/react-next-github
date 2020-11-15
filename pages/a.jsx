import { useRouter } from 'next/router'

const A = () =>{
  const router = useRouter();
  const {aaa} = router.query;
  return <h2>
    A Page {aaa}
  </h2>
}

export default A;