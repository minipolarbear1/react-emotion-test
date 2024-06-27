// webpack.server.js
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    target: "node",
    mode: "development",
    entry: path.resolve(__dirname, "server/index.jsx"),
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".jsx"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/server"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: "babel-loader",
                // exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-syntax-jsx"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext][query]',
                },
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext][query]',
                        },
                    },
                ],
            }
        ],
    },
};