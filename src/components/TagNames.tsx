import styled from 'styled-components';
import {RecordItem} from '../hooks/useRecord';
import {useTags} from '../hooks/useTags';
import {ReactNode} from 'react';
import React from 'react';

const Wrapper = styled.div`
  
`;
type Props = {
  record: RecordItem
}
export const TagNames: React.FC<Props> = (props) => {
  const {getName} = useTags();
  return (
    <Wrapper className="tagName oneLine">
      {props.record.tagIds
        .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
        .reduce((result, span, index, arr) =>
            index < arr.length - 1 ? result.concat([span, '，']) : result.concat([span])
          , [] as ReactNode[])
      }
    </Wrapper>
  );
};
