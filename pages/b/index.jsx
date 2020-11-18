import { useState } from 'react';
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../../components/Text'))

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']

export default function Page() {
  const [results, setResults] = useState()

  return (
    <div>
      <DynamicComponent></DynamicComponent>
      <input
        type="text"
        placeholder="Search"
        onChange={async (e) => {
          const { value } = e.currentTarget
          // Dynamically load fuse.js
          const moment = (await import('moment')).default;
          {/* const Fuse = (await import('fuse.js')).default
          const fuse = new Fuse(names) */}

          setResults(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  )
}