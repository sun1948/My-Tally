import {useRef, useEffect} from 'react';

const useUpdate = (fn: () => void, deps: any[]) => {
  console.log('useUpdate')
  const count = useRef(0);
  useEffect(()=>{
    count.current += 1;
  })
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps);
};

export {useUpdate};
