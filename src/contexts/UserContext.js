import React, { createContext, Component, useState } from 'react';

export const UserContext = createContext();

const UserContextComponent = (props) => {
    const [isUserOnline, setIsUserOnline] = useState(true);

    const handleClick = () => {
        setIsUserOnline(!isUserOnline)
    }

    return (
        <UserContext.Provider value={{ isUserOnline, handleClick: handleClick }}>
            {props.children}
        </UserContext.Provider>
    )
}

// class UserContextComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isUserOnline: true,
//         }
//     }

//     handleClick = () => {
//         this.setState({ isUserOnline: !this.state.isUserOnline })
//     }

//     render() {
//         return (
//             <UserContext.Provider value={{ ...this.state, handleClick: this.handleClick }}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }

export default UserContextComponent;