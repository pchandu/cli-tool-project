# cli-tool-project

to install this application: 
1. clone project
2. cd into its directory
3. npm install
4. sudo npm link

**to run this application**
enter "parkbot" into your terminal (once its linked, the command is accessible globally)

supported functions: 
1. locate: `${name of file you want to parse (must be in parkbot folder} ${locate} ${state}`
  ex: 
```
data.json locate AZ
```

2. find_price_hourly_lte: `${name of file you want to parse (must be in parkbot folder} ${find_price_hourly_lte} ${price in cents}`
ex: 
```
data.json find_price_hourly_lte 200
```

3. find_price_hourly_gt: `${name of file you want to parse (must be in parkbot folder} ${find_price_hourly_gt} ${price in cents}`
ex: 
```
data.json find_price_hourly_gt 200
```
