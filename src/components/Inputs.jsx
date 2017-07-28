//@flow
import * as React from 'react';
import {EUserRoles} from '../classes/User';

export type IUserData = {
  firstName: string;
  lastName: string;
  role: $Keys<typeof EUserRoles>;
}

export default class Inputs extends React.PureComponent {
  props: {
    onSubmit(userData: IUserData): void;
  }
  state: IUserData = {
    lastName: '',
    firstName: '',
    role: EUserRoles.NONE
  };

  render() {
    const {firstName, lastName} = this.state;
    return (
      <div>
        <input placeholder="first name" value={firstName} onChange={this.onInputChane('firstName')}/>
        <input placeholder="last name" value={lastName} onChange={this.onInputChane('lastName')} />
        <select  onChange={this.onInputChane('role')}>
          <option value={EUserRoles.NONE}>Нет роли</option>
          <option value={EUserRoles.ACCOUNTANT}>Бухгалтер</option>
          <option value={EUserRoles.ADMIN}>Администратор</option>
        </select>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

  onInputChane = (prop: string) => (e: any) => {
    this.setState({[prop]: e.target.value});
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }
}
