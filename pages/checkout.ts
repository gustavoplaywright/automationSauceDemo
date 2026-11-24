import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly title: Locator;
    readonly continueToEnd: Locator;
    readonly ToCart: Locator;
    readonly name: Locator;
    readonly surname: Locator;
    readonly zip: Locator;
    readonly toFinish: Locator;
    readonly toCheckout: Locator;

constructor (page:Page) {
    this.page = page;
    this.title = page.getByText('Your Cart');
    this.ToCart = page.locator('[data-test="cancel"]');
    this.continueToEnd = page.locator('[data-test="continue"]');
    this.name = page.locator('[data-test="firstName"]');
    this.surname = page.locator('[data-test="lastName"]');
    this.zip = page.locator('[data-test="postalCode"]');
    this.toFinish = page.locator('[data-test="finish"]');
    this.toCheckout = page.locator('[data-test="cancel"]');


}

async goToEnd () {
 await this.continueToEnd.click();
}

async backToCart () {
    await this.ToCart.click();
}

async completeInfo (nombre: string, apellido: string, codigo: string) {
    await this.name.fill(nombre);
    await this.surname.fill(apellido);
    await this.zip.fill(codigo);
}

async toFinishSale () {
    await this.toFinish.click();
}

}