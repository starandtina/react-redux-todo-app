require('babel-core/register');

const chalk     = require('chalk');
const devServer = require('../build/webpack-dev-server').default;
const config    = require('../config').default;

const host = config.get('webpack_host');
const port = config.get('webpack_port');
devServer.listen(port, host, function () {
  console.log(chalk.green(
    `webpack-dev-server is now running at ${host}:${port}.`
  ));
});
