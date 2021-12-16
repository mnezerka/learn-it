
export const get_random_int = function get_random_int(max) {
        return Math.floor(Math.random() * max);
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export const shuffle_array = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

export const hash = function(str) {
    var result = 0, i, chr;
    if (str.length === 0) return result;
    for (i = 0; i < str.length; i++) {
      chr   = str.charCodeAt(i);
      result = ((result << 5) - result) + chr;
      result |= 0; // Convert to 32bit integer
    }
    return result;
  };