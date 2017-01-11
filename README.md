Chrome extension library to execute shell commands
through [native messaging][Native Messaging].

Dependencies
------------

- [Ruby][]

Installation
------------

### Load the extension

Open <chrome://extensions> in your browser, enable _Developer mode_ then
[Load unpacked extension…](app).

### Install the manifest

- [Native messaging host location][]

`shell.json`

``` json
{
  "name": "shell",
  "description": "Chrome native messaging host to execute shell commands",
  "path": "<path>/host/shell",
  "type": "stdio",
  "allowed_origins": [
    "chrome-extension://<id>/"
  ]
}
```

Examples
--------

- [Cross-extension messaging][]

Connect extension:

``` javascript
port = chrome.runtime.connect(<id>)
```

Send command:

``` javascript
port.postMessage({ command: <command> })
```

Receive response:

``` javascript
port.onMessage.addListener((message) => {
  console.log(message.response)
})
```

[Ruby]: https://ruby-lang.org
[Native Messaging]: https://developer.chrome.com/extensions/nativeMessaging
[Native messaging host location]: https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location
[Cross-extension messaging]: https://developer.chrome.com/extensions/messaging#external
