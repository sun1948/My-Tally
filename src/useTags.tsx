import { useState } from "react";

const useTags = ()=>{   //封装自定义hook，即一个函数内部使用useState/useRef等等，然后返回一个接口。
  const [tags, setTags] = useState(['衣', '食', '住', '行']);
  return {tags,setTags};
}

export {useTags};
