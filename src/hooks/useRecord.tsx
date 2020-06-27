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
  const getRecords = (idString: string, type: 'amount' | 'note' | 'category') => {
    if (records.filter(r => r.tagIds.toString() === idString)[0]) {
      return records.filter(r => r.tagIds.toString() === idString)[0][type];
    } else {
      return;
    }
  };
  const updateNote = (idString: string, {note}: { note: string }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === idString ? {...r, note} : r
    ));
  };
  const updateAmount = (idString: string, {amount}: { amount: number }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === idString ? {...r, amount} : r
    ));
  };
  const updateCategory = (idString: string, {category}: { category: '-' | '+' }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === idString ? {...r, category} : r
    ));
  };
  const deleteRecord = (idString: string) => {
    setRecords(records.filter(r =>
      r.tagIds.toString() !== idString
    ));
  };
  const findRecords = (idString: string) => records.filter(r =>
    r.tagIds.toString() === idString)[0];
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
