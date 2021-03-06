const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamFrZWphbWVzOTYiLCJhIjoiY2t5b3J1M3BwMDJ5dzJwbnBzbjR5ZXhhYSJ9.gPK8xDdBYCfQmu0tBHSqVA&limit=1'

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location, try again with different search term', undefined)
        } else {
            const feature = body.features[0]
            const placeName = feature.place_name
            const latitude = feature.center[1]
            const longitude = feature.center[0]
            callback(undefined, {
                location: placeName,
                latitude: latitude,
                longitude: longitude
            })
        }
    })
}

module.exports = geocode
