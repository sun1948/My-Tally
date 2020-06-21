import { useState } from "react";

const useTags = ()=>{   //封装自定义hook，即一个函数内部使用useState/useRef等等，然后返回一个接口。
  const [tags, setTags] = useState<{id:number;name:string}[]>([
    {id:1,name:'衣'},
    {id:2,name:'食'},
    {id:3,name:'住'},
    {id:4,name:'行'}
  ]);
  return {tags,setTags};
}

export {useTags};
