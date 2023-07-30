import Urls from "./0_urls";

const myAccountHeaderButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel =  '.added_to_cart'


class HomePage{

    clickMyAccounntHeaderButton(){
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(product){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(product).click()
        })
    }

    clickGoTocartFromProductButton(){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(checkCartFromProductLevel).click()
        })
    }



    visitPage(){
        const urls = new Urls
        urls.visitHomePage()
    }

}

export default HomePage;