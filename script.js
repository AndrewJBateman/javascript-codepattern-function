const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
  console.log('key event: ', e.key);
  pressed.push(e.key);

  // length of string to be length of secret code - count from end
  pressed.splice(-secretCode.length-1, pressed.length - secretCode.length);
  
  // join letters to make a string then check if it is the same as the secret code
  if (pressed.join('').includes(secretCode)) {
    console.log('Ding Dong!');
    cornify_add();
  }
//   console.log(pressed.join(''));
  console.log('pressed array: ', pressed);
});
