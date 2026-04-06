import { useContext } from 'react';
import { AppContext } from '../App';

export function useAppContext() {
  return useContext(AppContext);
}
