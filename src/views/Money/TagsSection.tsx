import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

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
    color: #666; padding: 0 4px; margin-top: 14px;
  } 
  
`;

type Props = {
  value: number[];
  onChange: (NewSelectedTags: number[]) => void;
}
const TagsSection: React.FunctionComponent<Props> = (props) => {
  const selectedTags = props.value;
  const {tags, setTags} = useTags();
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签名称：');
    if (tagName !== null) {
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTags.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTags, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTags.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};