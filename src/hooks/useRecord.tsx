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
  const getRecords = (tagIds: number[], type: 'amount' | 'note' | 'category') => {
    if (records.filter(r => r.tagIds.toString() === tagIds.toString())[0]) {
      return records.filter(r => r.tagIds.toString() === tagIds.toString())[0][type];
    } else {
      return;
    }
  };
  const updateNote = (tagIds: number[], {note}: { note: string }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === tagIds.toString() ? {...r, note} : r
    ));
  };
  const updateAmount = (tagIds: number[], {amount}: { amount: number }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === tagIds.toString() ? {...r, amount} : r
    ));
  };
  const updateCategory = (tagIds: number[], {category}: { category: '-' | '+' }) => {
    setRecords(records.map(r =>
      r.tagIds.toString() === tagIds.toString() ? {...r, category} : r
    ));
  };
  const deleteRecord = (tagIds: number[]) => {
    setRecords(records.filter(r =>
      r.tagIds.toString() !== tagIds.toString()
    ));
  };
  const findRecords = (tagIds: number[]) => records.filter(r =>
    r.tagIds.toString() === tagIds.toString())[0];
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
