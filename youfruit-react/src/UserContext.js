import React, {
    Component
} from 'react'

const UserContext = React.createContext()


class UserProvider extends Component {
    state = {
        // products: productsData,
        // blogPosts: blogData,
        cartQuantity: [],
        cartInside: [],
        cartTotal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        menuOpen: false
    }


    addToCartProductNew = (id, name, price, img, inputState) => {
        const addToCartProductNew = [...this.state.cartInside];
        addToCartProductNew.push({ id, name, price, img, inputState });
        this.setState({
            cartInside: addToCartProductNew
        })
    }
    render() {
        const { children } = this.props
        const { test } = this.state
        const { addToCartProductNew } = this
        return (
            <UserContext.Provider value={
                {
                    test,
                    addToCartProductNew
                }
            }>
                {children}
            </UserContext.Provider>
        )
    }
}



export default UserContext
export { UserProvider }
