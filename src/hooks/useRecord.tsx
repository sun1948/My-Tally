import {useState, useEffect} from 'react';
import {useUpdate} from 'hooks/useUpdate';

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '-' | '+'
  amount: number
  createAt: string
}
type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecord = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    const localRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
    setRecords(localRecords);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, records);
  const findRecords = (timeString: string) => records.filter(r =>
    r.createAt === timeString)[0];
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  const getRecord = (timeString: string, type: 'amount' | 'note' | 'category') => {
    if (records.filter(r => r.createAt === timeString)[0]) {
      return records.filter(r => r.createAt === timeString)[0][type];
    } else {
      return;
    }
  };
  type Obj = {
    note?: string
    category?: '-' | '+'
    amount?: number
  }
  const updateRecord = (timeString: string, obj: Obj) => {
    setRecords(records.map(r =>
      r.createAt === timeString ? {...r, ...obj} : r
    ));
  };
  const deleteRecord = (timeString: string) => {
    setRecords(records.filter(r =>
      r.createAt !== timeString
    ));
  };

  return {
    records,
    setRecords,
    addRecord,
    getRecord,
    updateRecord,
    deleteRecord,
    findRecords
  };
};
