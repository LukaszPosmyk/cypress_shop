import Urls from "./0_urls";

const userNameEmailField = '#username'
const passwordField = '#password'
const loginButton = 'button[name="login"]'
const myAccountNavigation = '.woocommerce-MyAccount-navigation'
const errorAfterWrongLogin = "ul[role='alert']"


class AccountPage{

    fillUsernameFieldWithEmail(email){
        cy.get(userNameEmailField).type(email)
    }
    
    fillPasswordField(password){
        cy.get(passwordField).type(password)
    }

    clickLoginButton(){
        cy.get(loginButton).click()
    }

    checkVisibiltyOfMyAccountNavigation(){
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibiltyOfErrorAfterWrongLogin(){
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    visitPage(){
        const urls = new Urls
        urls.visitMyAccountPage()
    }
    
}
export default AccountPage;