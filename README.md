# cli-tool-project
got cracked during an interview that asked me to build a cli tool in an hour so I learned how to do it afterwards. 

to install this application: 
1. clone project
2. cd into its directory
3. npm install
4. sudo npm link

to run this application: 
1. enter "parkbot" into your terminal (once its linked, the command is accessible globally)

supported functions: 
locate: `${name of file you want to parse (must be in parkbot folder} ${locate} ${state}`
  ex: 
```
data.json locate AZ
```
find_price_hourly_lte: `${name of file you want to parse (must be in parkbot folder} ${find_price_hourly_lte} ${price in cents}`
ex: 
```
data.json find_price_hourly_lte 200
```

find_price_hourly_gt: `${name of file you want to parse (must be in parkbot folder} ${find_price_hourly_gt} ${price in cents}`
ex: 
```
data.json find_price_hourly_gt 200
```
