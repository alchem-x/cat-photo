export default {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [["@emotion"]],
                    },
                },
            },
        ],
    },
    externals: {
        '@emotion/css': 'emotion',
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
    },
    mode: 'development',
}