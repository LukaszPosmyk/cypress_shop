import HomePage from '../page-objects/1_homePage'
import CartPage from '../page-objects/3_cart_page'
import OrderPage from '../page-objects/4_orderPage'

describe('my second scenario', ()=>{
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    it('should order a product from the shop', function(){
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoTocartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinished()
         


    })

})
