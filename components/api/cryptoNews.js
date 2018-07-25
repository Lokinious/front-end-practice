import CryptoNewsApi from 'crypto-news-api'

const Api = new CryptoNewsApi('48176d1f4c496024b652eec1a45f259a')
// const ProxyApi = new CryptoNewsAPI('48176d1f4c496024b652eec1a45f259a', 'http://cryptocontrol_proxy/api/v1/public')

const getTopNewsFromApi = () => {
    Api.getTopNews()
        .then(function (articles) { console.log(articles) })
        .catch(function (error) { console.log(error) })
}
 
// // Get top news for Bitcoin
// Api.getTopNewsByCoin("bitcoin")
//     .then(function (articles) { console.log(articles) }) 
//     .catch(function (error) { console.log(error) })
 
// // Get latest tweets for EOS
// Api.getLatestTweetsByCoin("eos")
//     .then(function (tweets) { console.log(tweets) })
//     .catch(function (error) { console.log(error) })
 
// // Get latest reddit posts for Ripple
// Api.getLatestRedditPostsByCoin("ripple")
//     .then(function (redditPosts) { console.log(redditPosts) })
//     .catch(function (error) { console.log(error) })
 
// // Get a combined feed (reddit/twitter/articles) for Litecoin
// Api.getTopFeedByCoin("litecoin")
//     .then(function (feed) { console.log(feed) })
//     .catch(function (error) { console.log(error) })
 
// // Get all reddit/tweets/articles (sepearted) for NEO
// Api.getTopItemsByCoin("neo")
//     .then(function (feed) { console.log(feed) })
//     .catch(function (error) { console.log(error) })
 
// // Get coin details for ethereum
// Api.getCoinDetails("ethereum")
//     .then(function (details) { console.log(details) })
//     .catch(function (error) { console.log(error) })


export {
    Api,
    getTopNewsFromApi
}