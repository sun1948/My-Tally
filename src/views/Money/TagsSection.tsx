import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ol{
    font-size: 14px;
    margin: 0 -12px;
    >li{
      background-color: #d9d9d9; display: inline-block; 
      border-radius: 18px; padding: 1px 18px;
      line-height: 22px;margin: 4px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  button{
    font-size: 14px;border: none;
    background: none;border-bottom: 1px solid #333;
    color: #666; padding: 2px 4px; margin-top: 14px;
  } 
  
`;

const TagsSection: React.FunctionComponent = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签名称：');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const X = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={
            () => onToggleTag(tag)
          } className={X(tag)}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};