//@flow
import Person from './Person';

export const EUserRoles = {
  NONE: 'NONE',
  ADMIN: 'ADMIN',
  ACCOUNTANT: 'ACCOUNTANT'
};
export type TUserRoles = $Keys<typeof EUserRoles>;

export interface IUser {
  role: TUserRoles;
}

export default class User extends Person<IUser> {
  isAdmin() {
    return this.getState().role === EUserRoles.ADMIN;
  }
}
