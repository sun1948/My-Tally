import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'}
];
const useTags = () => {   //封装自定义hook，即一个函数内部使用useState/useRef等等，然后返回一个接口。
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const tagsClone = JSON.parse(JSON.stringify(tags));   //深拷贝
  const updateTag = (id: number, obj: { name: string }) => {
    tagsClone.splice(findTagIndex(id), 1, {id: id, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return {tags, setTags, findTag, updateTag, deleteTag};
};

export {useTags};
