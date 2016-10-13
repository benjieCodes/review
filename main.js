(function() {
  'use strict';

  var players = [
    {
      name: 'player 1',
      health: 100,
      skills: {
        weapon: 'Axe',
        magic: 'Wizard'
      }
    },
    {
      name: 'player 2',
      health: 100,
      skills: {
        weapon: 'Staff',
        magic: 'Sorcerer'
      }
    }
  ];

  // console.log(p2Magic);
  // console.log(players[1].skills.magic);


  // forEach usage (does something)
  players.forEach( function (player) {
    console.log(player.skills.weapon);
  });

  // map usage (returns something [an array])
  var weapons = players.map(function (player) {
    return player.skills.weapon;
  });
  console.log(weapons);

  // filter usage (returns something [filtered array])
  var wizards = players.filter(function (player) {
    return player.skills.magic === 'Wizard';
  });
  console.log(wizards);
}());
