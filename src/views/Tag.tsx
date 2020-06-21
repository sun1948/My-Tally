import React from "react";
import {useTags} from 'useTags';
import { useParams } from "react-router-dom";

type Params ={
  id: string;
}
const Tag:React.FC = ()=>{
  let { id } = useParams<Params>();
  const {tags} = useTags();
  const tag = tags.filter(tag => tag.id === parseInt(id))[0]
  return (
    <div>{tag.name}</div>
  )
}
export {Tag};