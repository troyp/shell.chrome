chrome.runtime.onConnectExternal.addListener((externalPort) => {

  shellPort = chrome.runtime.connectNative('shell')

  externalPort.onMessage.addListener((message) => {
    shellPort.postMessage(message)
  })

  shellPort.onMessage.addListener((message) => {
    externalPort.postMessage(message)
  })

})
