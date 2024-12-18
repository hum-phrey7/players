
const game = {
    team1:'Bayern Munich',
    team2: 'Borrusia Dortmund',
    players: [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
   'Gnabry',
   'Lewandowski',
 ],

 [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    
 ]

],

score: '4:0',
scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
date: 'Nov 9th,2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,

},

};



const [players1, players2]  = game.players;
console.log(players1,players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers)

 //add 3 players to players1
 players1New = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
 
 const {odds: {team1, x:draw, team2}, }= game;
console.log(team1,draw,team2);
 

