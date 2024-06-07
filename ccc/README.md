# CCC Parser
* The [data](ccc.json) here was from https://github.com/nossbigg/catechism-ccc-json/releases
* Simplified CCC with CCC paragraph number as key.
* Example
```
{
  '2865': 'By the final "Amen," we express our "fiat" concerning the seven petitions: "So be it".'
}
```
* Data generated using this command:
```
node parse.js > ccc-parsed.json
```
* Used `nvm use 20` at the last run. The only library used is `fs`.
