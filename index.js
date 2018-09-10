const {readFileSync} = require("fs");
const {resolve} = require("path");


module.exports = function dotenvJSON({encoding = 'utf8', env, dir, path} = {}) {
  let dirpath = process.cwd();
  let filename = '.env.json';
  
  if (env)    filename  = env === 'development' ? filename : `.env.${env}.json`;
  if (dir)    dirpath   = resolve(dirpath, dir);
  if (!path)  path      = resolve(dirpath, filename);
  
  try {
    const parsed = JSON.parse(readFileSync(path, {encoding}));

    const {env} = process
    for (const key in parsed) {
      if (!env.hasOwnProperty(key)) {
        const value = parsed[key];

        env[key] = typeof value === 'string' ? value : JSON.stringify(value);
      }
    }

    return {parsed};
  } catch (error) {
    return {error};
  }
};