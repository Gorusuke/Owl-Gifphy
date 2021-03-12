import React, { Suspense } from 'react' 
import useNearScreen from '../hooks/useNearScreen'
// import TrendingSeaches from './TrendingSeaches'

const TrendingSeaches = React.lazy(
  () => import('./TrendingSeaches')
)

const LazyTranding = () => {

  const {show, elementRef} = useNearScreen({distance: '200px'})

  return <div ref={elementRef}>
    <Suspense fallback={null}>
      {show ? <TrendingSeaches /> : null}
    </Suspense>
  </div>

}

export default LazyTranding;
