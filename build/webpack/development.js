import webpackConfig from './_base';

webpackConfig.watch = true;
webpackConfig.devtool = 'source-map';
webpackConfig.output.fileName = '[name].[hash].js';

export default webpackConfig;
