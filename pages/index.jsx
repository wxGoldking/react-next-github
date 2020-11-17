import {Button} from 'antd';
import Link from 'next/Link';
import { useRouter } from 'next/router'
const Index = () => {
  const router = useRouter();
  const clickToA = () => {
    router.push({
      pathname: '/a',
      query: {aaa: 'dd'}
    });
  }

  const clickToB = () => {
    router.push({
      pathname: '/b/[bbb]',
      query: {bbb: '97653'}
    });
  }
  return <div>
    <h1>首页</h1>
    <Button type="primary">Primary Button</Button>
    <br/>
    <br/>
    <Link href="/a" title="A">
      <Button type="primary">普通路由 query参数</Button>
    </Link>
    <br/>
    ------------------------------------------------------------------------
    <br/>
    <Link href={{
      pathname: '/b/[bbb]',
      query: { bbb: '1234567' }
    }} title="b">
      <Button type="primary">动态路由 params参数</Button>
    </Link>
    <br/>
    <br/>
    <Button onClick={clickToA}>router to A</Button>
    <br/>
    <br/>
    <Button onClick={clickToB}>router to B</Button>
  </div>
}
export default Index;