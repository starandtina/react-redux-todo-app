import webpackConfig from './_base';

webpackConfig.devtool = 'source-map';
webpackConfig.output.fileName = '[name].[hash].js';

export default webpackConfig;
