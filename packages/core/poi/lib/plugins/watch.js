exports.name = 'builtin:watch'

exports.apply = api => {
  api.hook('onCreateCLI', ({ command, args }) => {
    command.option('-w, --watch', 'Watch and rebuild on file changes')

    if (!args.has('w') && !args.has('watch')) return

    command.action(() => {
      const compiler = api.createWebpackCompiler(
        api.createWebpackConfig().toConfig()
      )
      compiler.watch({}, err => {
        if (err) {
          api.logger.error(err)
        }
      })
    })
  })
}
