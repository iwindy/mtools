module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['iohook'],
      nodeIntegration: true,
      // Use this to change the entrypoint of your app's main process
      // mainProcessFile: 'src/main/app.ts',
      // Use this to change the entry point of your app's render process. default src/[main|index].[js|ts]
      // rendererProcessFile: 'src/renderer/main.ts',
    },
  },
}
