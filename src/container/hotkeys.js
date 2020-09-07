import hotkeys from 'hotkeys-js';

export default () => hotkeys('*', function() {
  if (hotkeys.shift) {
    console.log('shift is pressed!');
  }

  if (hotkeys.ctrl) {
    console.log('ctrl is pressed!');
  }

  if (hotkeys.alt) {
    console.log('alt is pressed!');
  }

  if (hotkeys.option) {
    console.log('option is pressed!');
  }

  if (hotkeys.control) {
    console.log('control is pressed!');
  }

  if (hotkeys.cmd) {
    console.log('cmd is pressed!');
  }

  if (hotkeys.command) {
    console.log('command is pressed!');
  }
});