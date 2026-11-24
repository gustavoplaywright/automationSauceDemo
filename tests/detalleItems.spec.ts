import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login';
import { InventoryPage} from '../pages/inventory';

test ('Primera compra', async({page}) => {
const login = new LoginPage(page);
const inventoryPage = new InventoryPage(page);

await test.step ('Login', async () => {
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
})

await test.step ('Reviso detalle de items backpack', async() => {
    await inventoryPage.detalleItemBack();
    await expect(inventoryPage.inventoryItemName).toHaveText('Sauce Labs Backpack')
    await inventoryPage.backToProdcuts();
    await expect(page.locator('[data-test="title"]')).toContainText(/Products/);

})

await test.step ('Reviso detalle de items Tshirt', async() => {
    await inventoryPage.detalleItemTshirt();
    await expect(inventoryPage.inventoryItemName).toHaveText('Sauce Labs Bolt T-Shirt')
    await inventoryPage.backToProdcuts();
    await expect(page.locator('[data-test="title"]')).toContainText(/Products/);

})


})