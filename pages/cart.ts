import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly title: Locator;
    readonly continueShopping: Locator;
    readonly checkout: Locator;

constructor (page:Page) {
    this.page = page;
    this.title = page.getByText('Your Cart');
    this.checkout = page.locator('[data-test="checkout"]');
    this.continueShopping = page.locator('[data-test="continue-shopping"]');

}

async goToCheckout () {
 await this.checkout.click();
}

async ToContinueShopping () {
    await this.continueShopping.click();
}
}
