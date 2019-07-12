var ideas = ["Bring a reusable waterbottle with you.", "Try to decrease use of single-use plastic products (such as utencils).", "Turn lights off and unplug electronics when not using them.", "Make a meal at home instead of eating out.", "Shop second-hand and donate when finished with clothes.", "Take a walk instead of hopping in the car! In the least, utilize public transportation.", "Rethink the products you use and try to replace one with a zero-waste option.", "Shop locally, especially when buying food.", "Do a little research to see what you can do to do your part with the planet.", "Make a donation to an organization focused on helping our planet, such as the Sierra Club.", "Speak with a local government representative to show your concern with the planet.", "Recycle and compost instead of adding to landfills.", "Always remember, sustainability matters."];
var words = $('#ideasYo');
var button = $('button');

button.on('click', giveIdeas);
function giveIdeas() {
  var random = Math.random() * ideas.length;
  var rounded = Math.floor(random);
  var idea = ideas[rounded];
  words.text(`${idea}`);
}
