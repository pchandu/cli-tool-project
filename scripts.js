
function locate(data, location){
    data.map(ele => {
        if(ele["address"]["state"] === location) process.stdout.write(ele["name"] + ", ");
    })
    console.log()
}

function findPriceHourlyLTE(data, price){
    data.map(ele => {
        if(ele["price_hourly"] <= price) process.stdout.write(ele["name"] + ", ");
    })
    console.log()
}

function findPriceHourlyGT(data, price){
    data.map((ele) => {
        if(ele["price_hourly"] > price) process.stdout.write(ele["name"] + ", ");
    })
    console.log()
}

module.exports = { locate, findPriceHourlyLTE, findPriceHourlyGT}