const CoinMarketCap = require('coinmarketcap-api')

const coinApi = new CoinMarketCap()

const getCoins = () => {

    return coinApi.getTicker().catch(console.error)
}

export{
    getCoins
}