import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly backpack: Locator;
    readonly bikelight: Locator;
    readonly tshirt: Locator;
    readonly cart: Locator;
    readonly removeBike: Locator;
    readonly removeTshirt: Locator;
    readonly removebackpack: Locator;
    readonly inventoryItemName: Locator;
    readonly detalleBike: Locator;
    readonly detalleTshirt: Locator;
    readonly detallebackpack: Locator;
    readonly backToProducts: Locator;


constructor (page:Page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.bikelight = page.locator('[add-to-cart-sauce-labs-bike-light]');
    this.tshirt = page.locator('[add-to-cart-sauce-labs-bolt-t-shirt]');
    this.cart = page.locator('[data-test="shopping-cart-link"]');
    this.removeBike = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.removeTshirt = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.removebackpack = page.locator('[remove-sauce-labs-bolt-t-shirt"]');
    this.inventoryItemName = page.locator('.inventory_details_name');
    this.detalleBike = page.locator('[data-test="item-0-title-link"]');
    this.detalleTshirt = page.locator('[data-test="item-1-title-link"]');
    this.detallebackpack = page.locator('[data-test="item-4-title-link"]');
    this.backToProducts = page.locator('[data-test="back-to-products"]');
    
}

async goToCart () {
 await this.cart.click();
}

async addItems () {
    await this.backpack.click();
}

async removeBikeItem() {
    await this.removeBike.click();
}

async detalleItemBack() {
    await this.detallebackpack.click();
}

async detalleItemBike() {
    await this.detalleBike.click();
}

async detalleItemTshirt() {
    await this.detalleTshirt.click();
}

async backToProdcuts() {
    await this.backToProducts.click();
}

}

