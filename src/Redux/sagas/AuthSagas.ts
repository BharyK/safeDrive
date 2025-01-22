import {
  call,
  put,
  takeLatest,
  SagaReturnType,
  takeEvery,
} from 'redux-saga/effects';
import {
  sliceAunticationRequest,
  sliceAunticationSuccess,
  sliceAunticationFailure,
  User,

} from '../slice/AuthReducer';
import { updateGlobalLoader } from '../slice/GloalLoaderReducer';
import { apiService, api } from '../../API/APICalls';
import { AxiosResponse } from 'axios';
import { Alert } from '../../utils';

function* authProvider(action:any) {
  try {
    yield put(updateGlobalLoader(true));
    console.log ("asdf")
    const response: AxiosResponse<User> = yield call(
      apiService.post,
      'auth/authenticate',
      action.payload
    );
    yield put(sliceAunticationSuccess(response.data));
    Alert(1, 'Successfully logged in ');
  } catch (errros: any) {
    yield put(updateGlobalLoader(false));
    yield put(sliceAunticationFailure())
    Alert(2, 'API has failure');
  } finally {
    yield put(updateGlobalLoader(false)); 
  }
}

export function* AuthSagas() {
  yield takeLatest(['auth/sliceAunticationRequest', 'globalLoader/globalLoader'], authProvider);
}
