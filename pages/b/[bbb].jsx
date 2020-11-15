import { useRouter } from 'next/router'

const B = () =>{
  const router = useRouter();
  const {bbb} = router.query;
  return <h2>
    B Page {bbb}
  </h2>
}

export default B;