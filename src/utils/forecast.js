const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a8c7346a1aeb66632d8e273d941597a1&query=' + lat + ',' + lon + '&units=m'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather services', undefined)
        } else if (body.error) {
            callback('Unable to retrieve weather for those coordinates')
        } else {
            callback(undefined, body.current.observation_time + '. ' + body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees outside. It feels like " + body.current.feelslike + " degrees out.")
            //callback(undefined, weatherDescription + ". It is currently " + temperature + " degrees outside. It feels like " + feelsLike + " degrees out.")

        }
    })

}

module.exports = forecast