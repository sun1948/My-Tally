import {useState, useEffect} from 'react';
import {useUpdate} from 'hooks/useUpdate';

type RecordItem = {
  tagIds: number[]
  note: string
  category: '-' | '+'
  amount: number
  createAt: string
}
type newRecordItem = Omit<RecordItem, 'createAt'>
export const useRecord = () => {
  console.log('useRecord执行了');
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    console.log('records挂载');
    const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
    setRecords(localRecords);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
    console.log('record setItem');
  }, [records]);
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  return {records, setRecords, addRecord};
};
