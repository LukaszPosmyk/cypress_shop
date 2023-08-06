import products from '../fixtures/products.json'

const productName = '.product-name'
const removeItemButton = ".remove"
const emptyCartAllert = '.cart-empty'
const goToPaymentsButton = ".wc-proceed-to-checkout"

class CartPage{
    checkThatAddedProductIsInCart(product){
        cy.get(productName).contains(product).should('exist')
    }

    removeItemFromCart(){
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty(){
        cy.get(emptyCartAllert).should('exist')
    }

    clickGoToPaymentsButton(){
        cy.get(goToPaymentsButton).click()
    }
}
export default CartPage;
