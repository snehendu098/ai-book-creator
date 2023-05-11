const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateOutline = async (req) => {
  const resOutline = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You have written multiple bedtime children story books",
      },
      {
        role: "user",
        content: `Generate 18 titles of bedtime stories of children with the following information. After the title, write a short description of the story in the format [Title]:[Description]. 

Don't give numberings. Write one after another like:
[Title 1]: [Description 1]
[Title 2]:[Description 2]
and so on

GENRE: Suspense
LANGUAGE: English

INFORMATION:
Main Character(s): Andrew
Mother(s): Monica, Bianca
Father(s): 
Uncle(s): Paul, Ron, Tim
Aunt(s): Sylvie, Scarlett, Wanda
Grandfather(s):
Grandmother(s): 
Friends(s): Herv, Ham, Tony, Bruce
Pet(s): A dog named cook, a cat named billie`,
      },
      {
        role: "assistant",
        content: `The Mysterious Footsteps: Andrew hears footsteps outside his bedroom window and decides to investigate.

The Missing Cat: Andrew's cat Billie goes missing and he searches the neighborhood to find her.

The Haunted House: Andrew and his friends explore an abandoned house in their neighborhood that is rumored to be haunted.

Midnight Adventure: Andrew sneaks out of the house in the middle of the night to go on an adventure with his dog Cook.

The Secret Door: Andrew discovers a secret door in his house that leads to a mysterious room.

The Disappearing Friends: Andrew's friends start disappearing one by one and he must solve the mystery before it's too late.

The Hidden Treasure: Andrew and his uncle Paul go on a treasure hunt in the woods.

The Ghostly Visitor: A ghostly visitor appears in Andrew's room one night and asks for his help.

The Creepy Doll: Andrew's aunt Sylvie gives him a creepy doll that seems to have a life of its own.

The Monster Under the Bed: Andrew is convinced that there is a monster under his bed and his dog Cook helps him confront his fear.

The Strange Noises: Andrew hears strange noises coming from the attic and decides to investigate.

The Secret Garden: Andrew discovers a secret garden in his backyard that is filled with surprises.

The Midnight Train: Andrew and his friends sneak onto a train in the middle of the night and have an adventure.

The Abandoned Playground: Andrew and his friends discover an abandoned playground and try to figure out why it was abandoned.

The Lost Key: Andrew loses the key to his house and has to figure out a way to get in without it.

The Spooky Woods: Andrew and his friends go on a hike in the woods and encounter some spooky creatures.

The Mystery of the Disappearing Toys: Andrew's toys start disappearing and he suspects that his cat Billie might be behind it.

The Secret Message: Andrew receives a secret message that leads him on a treasure hunt.`,
      },
      {
        role: "user",
        content: `GENRE: ${req.body.genre}
LANGUAGE: ${req.body.language}

INFORMATION:
Main Character(s): ${req.body.mainCharacter}
Mother(s): ${req.body.mothers}
Father(s): ${req.body.fathers}
Uncle(s): ${req.body.uncles}
Aunt(s): ${req.body.aunts}
Grandfather(s): ${req.body.grandfathers}
Grandmother(s): ${req.body.grandmothers}
Friends(s): ${req.body.friends}
Pet(s): ${req.body.pets}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1600,
  });

  return resOutline?.data.choices[0]?.message?.content;
};

export const generateStory = async (props) => {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You have written many beautifull bedtime stories. Write a bedtime story with the given information.

Language:  ${props.language}
Genre: ${props.genre}
Title: ${props.title}
Description: ${props.description} 

STORY:`,
    max_tokens: 300,
  });

  return res?.data.choices[0]?.text;
};
