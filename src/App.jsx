import React, {useState} from 'react'
import Product from './product'

function App() {
  let [count, setCount] = useState(0) //there are also useEffect() and useRef()
  return (
    <><div className='font-bold'>{count}</div>
      <button onClick={()=>{setCount(count+1)}} className='px-3 py-1 bg-blue-400 rounded-md'>click me</button>
      <Product name='apple' info={{region:"indiaUS", year:"2025"}}/>
    </>

  )
}

export default App