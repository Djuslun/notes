import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filtersSet } from '../redux/filters.Slice';
import { tagOptions } from '../utils/consts';
import { notesSet } from '../redux/notes.Slice';

export const useLocalStogare = () => {
  const dispatch = useDispatch()

  const store = JSON.parse(localStorage.getItem('store'))

  useEffect(() => {
    const filters = store
      ? Object.values(store.filters.entities)
      : tagOptions
    const notes = store
      ? Object.values(store?.notes?.entities)
      : []
    dispatch(filtersSet(filters))
    dispatch(notesSet(notes))
  }, [])

}