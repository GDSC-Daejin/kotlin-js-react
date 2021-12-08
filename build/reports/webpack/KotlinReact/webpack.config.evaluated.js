{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/harry/Development/KotlinReact/build/js/packages/KotlinReact/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/harry/Development/KotlinReact/build/js/packages/KotlinReact/kotlin-dce-dev/KotlinReact.js'
    ]
  },
  output: {
    path: '/Users/harry/Development/KotlinReact/build/distributions',
    filename: [Function: filename],
    library: 'KotlinReact',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/harry/Development/KotlinReact/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}