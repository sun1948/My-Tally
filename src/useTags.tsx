import { useState } from "react";
import {createId} from 'lib/createId';

const defaultTags = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]
const useTags = ()=>{   //封装自定义hook，即一个函数内部使用useState/useRef等等，然后返回一个接口。
  const [tags, setTags] = useState<{id:number;name:string}[]>(defaultTags);
  return {tags,setTags};
}

export {useTags};
