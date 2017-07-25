//@flow
import * as React from 'react';
import Inputs from './Inputs.jsx';
import type {IUserData} from './Inputs.jsx';
import User, {EUserRoles} from '../classes/User';

export default class Form extends React.PureComponent {
  props: {}
  state = {
    userData: {
      firstName: '',
      lastName: '',
      role: EUserRoles.NONE,
    }
  };
  render() {
   const user = new User(this.state.userData);
   const {role} = user.getState();
   const fullName = user.getFullName();
   const isAdmin = user.isAdmin();
   return (
     <div>
       <p><b>User:</b> {fullName}</p>
       {
         isAdmin &&
         <p><b>Role:</b> {role}</p>
       }
       <Inputs onSubmit={this.onFormSubmit}/>
     </div>
   );
  }

  onFormSubmit = (userData: IUserData): void => {
    this.setState({userData});
  }
}
