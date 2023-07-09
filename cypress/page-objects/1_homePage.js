import Urls from "./0_urls";

const myAccountHeaderButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCartFromProductLevel =  '.added_to_cart'

export const Product = {
    HoodieWithZipper: {
        Locator: 'a[data-product_id="51"]',
        Name: "Hoodie with Zipper"

    },
    Polo: {
        Locator: 'a[data-product_id="53"]',
        Name: "Polo"

    },
    Sunglasses: {
        Locator: 'a[data-product_id="49"]',
        Name: "Sunglasses"

    }
}

class HomePage{

    clickMyAccounntHeaderButton(){
        cy.get(myAccountHeaderButton).click()
    }

    addProductToCart(){
        cy.get(dataBlockNameNew).within(()=>{
            cy.get(Product.HoodieWithZipper.Locator).click()
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