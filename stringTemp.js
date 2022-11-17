
//wrong code need to fix 
//function buildString(...template){
//   return `I like #{template.join(',')}!`;
// }

//right code , changed the identifier with the $ and put a space on the comma for template.join
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
