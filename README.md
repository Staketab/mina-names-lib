# Mina Names SDK

This is a lightweight SDK, providing utility classes and functions for applications to interact with on-chain `.mina` names registered at [Mina Name Service](https://names.minascan.io).

## Getting started

The SDK is published in [npm registry](https://www.npmjs.com/package/mina-names). To use it in your project,  run:
```bash
$ npm i mina-names
```

You can also use yarn or pnpm.

## Examples

Create an instance of MinansClient:

```typescript
import { MinansClient } from "mina-names";

const client = new MinansClient({ network: "devnet" });
```

Fetch the default name and avatar of a `Mina Address`:

```typescript
const defaultName = await client.getName({
    address: "B62qk1sJumHSS1hPKS2fSAbxkkwGcCiieb1PcM4PB182pa1MKE9H9AV",
});
```

Fetch a list of domains associated with a `Mina Address`:

```typescript
const domains = await client.getDomains({
    address: "B62qk1sJumHSS1hPKS2fSAbxkkwGcCiieb1PcM4PB182pa1MKE9H9AV",
    options: {
        page: 0,
        limit: 50,
    },
});
```
## Documentation

Soon 

## Website

https://names.minascan.io

## Library on NPM

https://www.npmjs.com/package/mina-names


## License

[Apache-2.0](https://github.com/Staketab/mina-names-lib/blob/main/LICENSE)
