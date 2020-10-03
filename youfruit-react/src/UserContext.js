import React, {
    Component
} from 'react'

const UserContext = React.createContext()


class UserProvider extends Component {
    state = {
        test: false
    }


    changeTest = () => {
        this.setState((prevState) => ({
            test
        }))
    }
    render() {
        const { children } = this.props
        const { test } = this.state
        const { changeTest } = this
        return (
            <UserContext.Provider value={
                {
                    test,
                    changeTest
                }
            }>
                {children}
            </UserContext.Provider>
        )
    }
}



export default UserContext
export { UserProvider }
