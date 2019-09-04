const configValues = require('./config.json');

module.exports = {
    getDBConnectString: function () {
        return `mongodb+srv://${configValues.username}:${configValues.password}@mongodbpart01-dxhak.gcp.mongodb.net/${conffigValues.dbname}?retryWrites=true&w=majority`;
    }
}