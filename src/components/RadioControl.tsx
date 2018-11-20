// import * as React from 'react';
// import EthereumForm from 'EthereumForm.tsx';
// import ExchangeForm from 'ExtrangeForm.tsx';
// import LocalFileForm from 'LocalFileForm.tsx';
// 
// class RadioControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
// 
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
// 
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
// 
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
// 
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
// 
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
// 
// 
// function FormDisplay(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
// 
// export default RadioControl;
