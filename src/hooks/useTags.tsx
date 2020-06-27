import {useState, useEffect} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () => {   //封装自定义hook，即一个函数内部使用useState/useRef等等，然后返回一个接口。
  console.log('useTag执行了');
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  //挂载后执行一次
  useEffect(() => {
    console.log('tag挂载');
    let localTags = JSON.parse(window.localStorage.getItem('localTags') || '[]');
    if (!window.localStorage.getItem('localTags')) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
      ];
    }
    setTags(localTags);
  }, []);
  //tags更新即执行
  useUpdate(() => {
      window.localStorage.setItem('localTags', JSON.stringify(tags));
    },
    tags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const updateTag = (id: number, {name}: { name: string }) => {
    // 深拷贝写法
    // tagsClone.splice(findTagIndex(id), 1, {id: id, name: obj.name});
    // setTags(tagsClone);
    setTags(tags.map(tag =>
      tag.id === id ? {id, name} : tag
    ));
  };
  const addTag = () => {
    const tagName = window.prompt('请输入新标签名称：');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const getName = (id: number) => {
    return tags.filter(tag => tag.id === id)[0] ?
      tags.filter(tag => tag.id === id)[0].name : '未定义';
  };
  return {tags, setTags, getName, findTag, updateTag, deleteTag, addTag};
};

export {useTags};

// const findTagIndex = (id: number) => {
//   let result = -1;
//   for (let i = 0; i < tags.length; i++) {
//     if (tags[i].id === id) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };
// const tagsClone = JSON.parse(JSON.stringify(tags));