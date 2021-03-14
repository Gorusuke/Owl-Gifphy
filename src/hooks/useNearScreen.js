import { useEffect, useRef, useState } from 'react'

const useNearScreen = ({distance = '100px', externalRef, once = true} = {}) => {

  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {

    const element = externalRef ? externalRef.current : elementRef.current

    const onChange = (entries) => {
      const element = entries[0]
      if(element.isIntersecting){
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    })
    
    if(element) observer.observe(element)

    return () => observer.disconnect()
  })

  return {show, elementRef}
}

export default useNearScreen
