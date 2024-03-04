const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
});

const allowedChannelId = 'Channel Id For The Dming Function';
const insultChannelId = 'Channel Id For Insults To Go Into'; // Replace with the actual channel ID for insults
const targetUserId = 'UserID of Victim'; // Replace with the actual user ID you want to target

const jokes = [
  'Thou art the jester of the court, spreading mirth with thy tomfoolery!',
  'Verily, thou art a court minstrel, singing tales of thy own adventures!',
  'Thy wit is as quick as the jester\'s cap and bells!',
  'Mayhaps thou shouldst join a guild of jesters, for thy humor is unparalleled!',
  'Thou art a master of medieval puns, a true wordsmith of the olden times!',
  'Why did the knight bring a ladder to the tavern? To get to the next level!',
  'How dost thou organize a space party? Plan it!',
  'What do ye call a group of musical knights? A band of minstrels!',
  'Why did the dragon apply for a job? He wanted a change of scale!',
  'Why did the medieval peasant start a bakery? He wanted to make some dough!',
  'What do you call a knight who is afraid to fight? Sir Render!',
  'How do knights end a meal? With a joust dessert!',
  'Why did the wizard go to therapy? He had too many spells of anxiety!',
  'What do you call a knight with a pet? Sir-purr!',
  'How did the knight fix his broken armor? With a knight in shining armor!',
  'Why did the bard get kicked out of the tavern? He couldn’t find the right key!',
  'What did the blacksmith say to the clumsy knight? "You have a lot of armor to answer for!"',
  'Why did the rogue become a gardener? He had a talent for picking locks!',
  'What do you call a cleric who sings? A choir cleric!',
  'Why did the elf bring a ladder to the bar? Because he heard the drinks were on the house!',
  'How does a paladin keep their armor shiny? They use holy polish!',
  'Why did the dwarf become an architect? He was great at building underground structures!',
  'What do you call a group of bards playing together? A chord of minstrels!',
  'How does a wizard keep in touch with friends? By using a spellphone!',
  'Why did the gnome start a bakery? Because he kneaded the dough!',
  'What do you call a cleric who tells jokes? A pun-dit!',
  'Why did the sorcerer open a magic shop? To make a wand-erful living!',
  'How does a ranger stay cool in the forest? They stand in the shade of the treant!',
  'Why did the jester bring a ladder to the castle? To reach the highest jest!',
  'How does a knight communicate on the battlefield? With a knight-tenna!',
  'Why did the nobleman start a bakery? He wanted to be a lord of the pies!',
  'What do you call a dragon with a cold? A snotty fire-breather!',
  // Add more jokes as needed
];

const insults = [
  'Thou art a knave and a fool!',
  'Verily, thou art as annoying as a buzzing mosquito!',
  'Thy presence is as welcome as a rat in the royal banquet hall!',
  'Mayhaps thou shouldst learn to speak without offending the ears of others!',
  'Thou art so dull that even the village idiot mocks thee!',
  'Thy wit is as sharp as a butter knife!',
  'Thou art the jest that falls flat, like a knight with rusty armor!',
  'Thy intelligence level is lower than the dungeons beneath the castle!',
  'Verily, thou art the reason the bard sings sad songs!',
  'Thou art more lost than a knight without a map!',
  'Thou art the moldy bread in the bakery of life!',
  'Thy ideas are as useful as a horse with no legs!',
  'Thou art the embodiment of a rainy day during a jousting tournament!',
  'Thy jokes are as dry as the desert, devoid of laughter!',
  'Mayhaps thou shouldst take a vow of silence for the sake of all!',
  'Thy sense of direction is like a compass that only points towards chaos!',
  'Verily, thou art the village idiot in a town of fools!',
  'Thy courage is as fleeting as a dragon at the sight of a knight!',
  'Thou art as subtle as a catapult in a library!',
  'Mayhaps thou shouldst reconsider thy life choices, for they lead only to folly!',
  'Thy existence is a tragedy, worthy of a Shakespearean play!',
  'Thou art the reason the wizard invented earplugs!',
  'Thy jokes are so bad that even the court jester weeps in despair!',
  'Verily, thou art the dragon of boredom, breathing yawns upon the kingdom!',
  'Thou art as vexing as a riddle without an answer!',
  'Thy wisdom is as elusive as a unicorn in a dense forest!',
  'Mayhaps thou shouldst join the circus, for thou art a true clown!',
  'Thou art the embodiment of chaos, a whirlwind of confusion and folly!',
  'Thy idea of strategy is like a chessboard with all pieces randomly placed!',
  'Verily, thou art the haystack in the needle stack of intellect!',
  'Seems like you have a skill issue!!!',
  // Add more insults as needed
];

client.on('messageCreate', async (message) => {
  //This function is for when the person messages in a specific channel given for allowedChannelId variable, the bot erases that person's message and dms them a joke from the joke array, picks it randomly.
  // Check if the message is in the allowed channel and sent by the target user
  if (message.channelId === allowedChannelId && message.author.id === targetUserId) {
    try {
      // Send a random medieval joke as a direct message to the user
      const user = await client.users.fetch(targetUserId);
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      await user.send(randomJoke);
    } catch (error) {
      console.error('Error sending DM:', error);
    }

    // Delete the message if it meets the criteria
    message.delete().catch(console.error);
  }
  
    // This Function is to ping the victim's id and insults them with an insult from insult array in specifc channel from insultChannelId variable, chosen randomly. 
    // This Bot was designed for one specific person to get both functions at the time this was made, but you can choose 2 different victims and they each get one function used on them. 
   // Check if the message is in the insult channel and sent by a specific user
   if (message.channelId === insultChannelId && message.author.id === '712870104685215748') {
    try {
      // Ping the user and send a random insult
      const insultedUser = `<@${message.author.id}>`; // Mention the user using <@userId>
      const randomInsult = insults[Math.floor(Math.random() * insults.length)];
      await message.channel.send(`${insultedUser}, ${randomInsult}`);
    } catch (error) {
      console.error('Error sending insult:', error);
    }
  }
});

client.login('Bots Token');