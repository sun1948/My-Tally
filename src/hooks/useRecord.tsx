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
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
  };
  const getRecords = (timeString: string, type: 'amount' | 'note' | 'category') => {
    if (records.filter(r => r.createAt === timeString)[0]) {
      return records.filter(r => r.createAt === timeString)[0][type];
    } else {
      return;
    }
  };
  const updateNote = (timeString: string, {note}: { note: string }) => {
    setRecords(records.map(r =>
      r.createAt === timeString ? {...r, note} : r
    ));
  };
  const updateAmount = (timeString: string, {amount}: { amount: number }) => {
    setRecords(records.map(r =>
      r.createAt === timeString ? {...r, amount} : r
    ));
  };
  const updateCategory = (timeString: string, {category}: { category: '-' | '+' }) => {
    setRecords(records.map(r =>
      r.createAt === timeString ? {...r, category} : r
    ));
  };
  const deleteRecord = (timeString: string) => {
    setRecords(records.filter(r =>
      r.createAt !== timeString
    ));
  };
  const findRecords = (timeString: string) => records.filter(r =>
    r.createAt === timeString)[0];
  return {
    records,
    setRecords,
    addRecord,
    getRecords,
    updateNote,
    updateAmount,
    updateCategory,
    deleteRecord,
    findRecords
  };
};
