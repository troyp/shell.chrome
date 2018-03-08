Chrome extension library to execute shell commands
through [native messaging][Native Messaging].

## Dependencies

- [Ruby][]

## Installation

### Load the extension

Open <chrome://extensions> in your browser, enable _Developer mode_ then
[Load unpacked extension…](app).

### Install the manifest

- [Native messaging host location][]

The [location of the native manifest][Native messaging host location] depends on
the version of Chrome ([Chromium][], [Google Chrome][]) and operating system.

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

## API

### Message

``` json
{
  command: <command>
}
```

### Response

``` json
{
  stdin: <stdin>,
  stdout: <stdout>,
  stderr: <stderr>,
  status: <status>,
  <message>
}
```

## Examples

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
  console.log(message)
})
```

[Ruby]: https://ruby-lang.org
[Chromium]: https://chromium.org
[Google Chrome]: https://google.com/chrome
[Native Messaging]: https://developer.chrome.com/extensions/nativeMessaging
[Native messaging host location]: https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location
[Cross-extension messaging]: https://developer.chrome.com/extensions/messaging#external
