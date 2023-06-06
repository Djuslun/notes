import { configureStore } from '@reduxjs/toolkit';
import reducer from '../notes.Slice'

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
    notes: reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;