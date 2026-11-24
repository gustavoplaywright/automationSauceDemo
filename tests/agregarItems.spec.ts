import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';
import {InventoryPage} from '../pages/inventory';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';

test ('Primera compra', async({page}) => {
const login = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);
await test.step ('Login', async () => {
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
})
await test.step ('Agrego items al carrito', async() => {
    await inventoryPage.addItems();
    await inventoryPage.goToCart();    
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('[data-test="title"]')).toContainText(/Your Cart/);
})

await test.step ('Ir al checkout', async() => {
    await cartPage.goToCheckout();
    await expect(page.locator('[data-test="title"]')).toContainText(/Checkout: Your Information/);
    await checkoutPage.completeInfo('Jose', 'Peñaloza', '1733');

})

await test.step ('Finalizar la compra', async() => {
    await checkoutPage.goToEnd();
    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(page.locator('[data-test="title"]')).toContainText(/Checkout: Overview/);
    await checkoutPage.toFinishSale();
    await expect(page.locator('[data-test="complete-header"]')).toContainText(/Thank you for your order!/)
})



})

test ('Compra removiendo un item (control del botón remover)', async({page}) => {
const login = new LoginPage(page);
const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);
await test.step ('Login', async () => {
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
})
await test.step ('Agrego items al carrito', async() => {
    await inventoryPage.addItems();

})

await test.step ('Remuevo un item del carrito', async() => {

    await inventoryPage.removeBikeItem();
    await inventoryPage.goToCart();    
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('[data-test="title"]')).toContainText(/Your Cart/);
})

await test.step ('Ir al checkout', async() => {
    await cartPage.goToCheckout();
    await expect(page.locator('[data-test="title"]')).toContainText(/Checkout: Your Information/);
    await checkoutPage.completeInfo('Jose', 'Peñaloza', '1733');

})

await test.step ('Finalizar la compra', async() => {
    await checkoutPage.goToEnd();
    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(page.locator('[data-test="title"]')).toContainText(/Checkout: Overview/);
    await checkoutPage.toFinishSale();
    await expect(page.locator('[data-test="complete-header"]')).toContainText(/Thank you for your order!/)
})

})