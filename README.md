# dotenv-json

> Load environment variables via a JSON file

```bash
npm install dotenv-json
```

Define your environment variables in `.env.json` in the root of your project (or wherever you start your node process):

```json
{
  "public_api_key": "s@Mpl3_d@Ta"
}
```

Load your environment variables at the beginning of your program:

```js
require("dotenv-json")();
```

You can customize the location of your `.env.json` file by passing a `path` option:

```js
const dotenvJSON = require("dotenv-json");
dotenvJSON({ path: "./config/example.json"});
```
