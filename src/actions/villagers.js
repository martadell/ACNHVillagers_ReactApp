import types from './types';
import fetchVillagers from '../fetchVillagers';

export const loadVillagers = () => async (dispatch, getState) => {
  dispatch({ type: types.LOAD_STARTED });
  try {
    let villagers = await fetchVillagers();
    dispatch({ type: types.LOAD_SUCCEEDED, payload: villagers });
  } catch (error) {
    dispatch({ type: types.LOAD_FAILED, payload: error });
  }
}