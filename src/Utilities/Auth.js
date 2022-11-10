import {
  AUTH_LOCAL_STORAGE_KEY,
  LOG_OUT_LOCAL_STORAGE_VALUE,
} from '../Constants/Constants'

export const getLocalStorageLogin = () => {
  if (localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)) {
    return localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  } else {
    return LOG_OUT_LOCAL_STORAGE_VALUE
  }
}
