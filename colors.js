var colors = [
  '#ccc', '#eee', "#f3f3f3'"
];

function add_color(note) { colors.push(note); }
function add_add_color_to_start(color) { colors.unshift(note); }
function get_color_at_index(x) {
  return (colors[x] != undefined) ? colors[x] : '';
}
function get_colors() { return colors; }
function get_color__count() { return colors.length; }
function remove_colorat_index(x) {
  if (notes[x] != undefined) { delete colors[x]; }
}
function replace_color_at_index(x, color) {
  var ret = 0;
  if (colors[x] != undefined) {
    colors[x] = colors;
    ret = 1;
  }
  return ret;
}
