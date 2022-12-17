# next-tailwind-mantine

[![Last Commit](https://img.shields.io/github/last-commit/yktt-nuane/next-tailwind-mantine)](https://github.com/yktt-nuane/next-tailwind-mantine/graphs/commit-activity)
[![CI](https://github.com/yktt-nuane/next-tailwind-mantine/actions/workflows/ci.yml/badge.svg)](https://github.com/yktt-nuane/next-tailwind-mantine/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

- [next-tailwind-mantine](#next-tailwind-mantine)
  - [Prerequisites](#prerequisites)
  - [How to](#how-to)
    - [Setup](#setup)
      - [Reveal secrets](#reveal-secrets)
      - [Hide secrets](#hide-secrets)
      - [Environment Variables](#environment-variables)
        - [`.env.local`](#envlocal)
    - [Develop](#develop)
    - [Test](#test)
    - [Deploy](#deploy)
  - [Misc](#misc)
    - [LICENSE](#license)
    - [Contributors](#contributors)

## Prerequisites

- Node.js (version 18.11.11 or higher)
  - Next.js (version 13.0.6 or higher)
  - ESLint
  - Prettier
  - Stylelint
  - Vitest

## How to

### Setup

#### Reveal secrets

To reveal secret files, `npm run reveal`.

#### Hide secrets

To hide secret files, `npm run hide`.

#### Environment Variables

##### `.env.local`

```.env.local
SECRET_KEY=xxxxxxxx
```

### Develop

`npm run dev` to start development server.

### Test

To test using Vitest and check coverage, `npm run test:unit`.

### Deploy

Every time you push to GitHub, it is automatically deployed to Vercel.

## Misc

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [Tatsuro Yokoyama](https://github.com/yktt-nuane)
