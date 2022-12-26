### Development

To start the project locally, run:

```
  yarn
```

then

```bash
  yarn dev
```

Open `http://localhost:3000` in the browser.

### Requirements

- Node.js >= 12.22.0

### Directory Structure

- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn test` — Run the unit test.
- `yarn sb` - Start storybook
- `yarn cypress` - Start Cypress test
  - Do `yarn build` & `yarn start` before running `yarn cypress`
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint --fix` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
// To import component
import { Loader } from '@/components/Loader';
// To import images or other files from the public folder
import favicon from '@/public/favicon.png';
```

## Fix for Tailwind Linting Issue

Make sure to install PostCSS Language Support, extension found in the VSCODE.

## Cypress Example

- https://example.cypress.io/commands/querying
- https://docs.cypress.io/api/commands/children#Selector

## License

### Strapi Products api

http://localhost:1337/api/products

Authorization cd4c9dbd3b10f956f708cef81827a7752bec01a6ffc3aea4cf67f3f88f7545676aabfc4a60fc8052bf845d0c7a27e0ba17f2e80182b1d30302132eb6d5b373c0505b0f058e2fdf0db27e6427572a585184d49c55c37fce89eaaf180f9afd1c3afc3e36d5216722dfe10a6e6cb37a42b11dc43d501e125ee71fbc0e08a6309fa4

<!-- login -->

POST /auth/local
{
"identifier"
"password"
}

<!-- get user info -->

GET /users/me

<!-- Register -->

POST /auth/local/register
{
"username":
"email":
"password"
}

<!-- cart items -->

GET /cart-items
Authorization

POST /cart-items
Authorization
Content-Type
Body{
product: // product id
quantity: // number
}
