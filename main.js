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

  var p2 = players[1];
  var p2Skills = p2.skills
  var p2Magic = p2Skills.magic;

  // console.log(p2Magic);
  // console.log(players[1].skills.magic);

  // forEach does not return something

  players.forEach( function (player) {
    console.log(player.skills.weapon);
  });

  // map returns an array
  
  var weapons = players.map(function (player) {
    return player.skills.weapon;
  });
  console.log(weapons);





}());
