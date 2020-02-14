import { SAVE_USER_INFO, DELETE_USER_INFO } from '../action_types';

export const createSaveUserInfoAction = userObj => {
  const { user, token } = userObj;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
  return { type: SAVE_USER_INFO, data: userObj };
};

export const createDeleteUserInfoAction = () => {
  localStorage.clear();
  return { type: DELETE_USER_INFO, data: '' };
};
