import HomePage from '../page-objects/1_homePage'
import AccountPage from '../page-objects/2_myAccountPage'
import CartPage from '../page-objects/3_cart_page'
import users from '../fixtures/users.json'
import products from '../fixtures/products.json'
import { faker } from '@faker-js/faker';


describe('my first scenario', ()=>{
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();

    
    it('should login to the application', function (){
        homePage.visitPage()
        homePage.clickMyAccounntHeaderButton()
        accountPage.fillUsernameFieldWithEmail(users.email)
        accountPage.fillPasswordField(users.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibiltyOfMyAccountNavigation()
        
    })

    it('should not login to the application', function (){
        accountPage.visitPage()
        accountPage.fillUsernameFieldWithEmail(faker.internet.email())
        accountPage.fillPasswordField(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibiltyOfErrorAfterWrongLogin()
        
    })

    it('should add product to cart and delete it from there', function(){
        homePage.visitPage()
        homePage.addProductToCart(products.Polo.Locator)
        homePage.clickGoTocartFromProductButton()
        cartPage.checkThatAddedProductIsInCart(products.Polo.Name)
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })

})
