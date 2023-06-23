import { configureStore } from '@reduxjs/toolkit';
import reducer from '../notes.Slice'
import filters from '../filters.Slice';

const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
}

const store = configureStore({
  reducer: {
    notes: reducer,
    filters
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
})

store.subscribe(() => {
  localStorage["store"] = JSON.stringify(store.getState())
})

export default store;