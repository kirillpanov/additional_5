module.exports = function check(str, bracketsConfig) {
  var brackets,
      screening,
      iteration,
      regexp;
  iteration = str.length;
  for (var i = 0; i < iteration; i++) {
    screening = [];
    for (var j = 0; j < bracketsConfig.length; j++) {
      brackets = bracketsConfig[j];
      for (var k = 0; k < brackets.length; k++) {
        screening.push('');
        if ( /[\[\\\^\$\.\|\?\*\+\(\)\]]/.test(brackets[0]) ) {
          screening[k] = '\\';
        };
      };
      regexp = new RegExp ( screening[0] + brackets[0] + screening[1] + brackets[1] , 'g' );
      str = str.replace(regexp,'');
    };
  };
  return str.length == 0;
}
