# Pruebas automatizadas de SauceDemo

Este proyecto contiene pruebas automatizadas para [SauceDemo](https://www.saucedemo.com/) y sirve como práctica de utilización del patrón **Page Object Model (POM)** con Playwright y TypeScript.

Las páginas de la aplicación se representan mediante clases ubicadas en `pages/`, mientras que los casos de prueba se encuentran en `tests/`.

## Requisitos previos

- Node.js
- npm

## Instalación

Desde la raíz del proyecto, instalar las dependencias:

```bash
npm install
```

Instalar los navegadores utilizados por Playwright:

```bash
npx playwright install
```

## Abrir la página

Puedes abrir SauceDemo manualmente desde el navegador accediendo a:

```text
https://www.saucedemo.com/
```

Los usuarios disponibles para las pruebas se encuentran en la página de login. El proyecto utiliza principalmente:

```text
Usuario: standard_user
Contraseña: secret_sauce
```

## Ejecutar los tests

Ejecutar toda la suite configurada en Chromium, Firefox y WebKit:

```bash
npx playwright test
```

Ejecutar los tests en un navegador específico:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Ejecutar un archivo de tests:

```bash
npx playwright test tests/login.spec.ts
npx playwright test tests/agregarItems.spec.ts
```

Ejecutar un test específico por nombre:

```bash
npx playwright test -g "Primera compra"
```

Ejecutar los tests con el navegador visible:

```bash
npx playwright test --headed
```

Abrir el modo interactivo de Playwright:

```bash
npx playwright test --ui
```

## Obtener los reportes

El proyecto está configurado con el reporter HTML. Cuando falla algún test, Playwright puede generar información adicional dentro de `test-results/`.

Para abrir el reporte HTML de la última ejecución:

```bash
npx playwright show-report
```

El reporte también puede consultarse desde `playwright-report/index.html`.
