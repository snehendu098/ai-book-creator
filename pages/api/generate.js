import { generateOutline, generateStory } from "@/helper/bookHelper";

export default async function handler(req, res) {
  try {
    const generatedOutline = await generateOutline(req);
    const separateOutline = await generatedOutline?.split("\n");

    const pairs = {};

    separateOutline?.map((item) => {
      if (item !== "") {
        const [title, description] = item.split(":");
        pairs[title] = description?.trim();
      }
    });

    console.log(pairs, "\n PAIRS");

    const array = Object.keys(pairs);

    const story = {};

    for (let i = 0; i < array.length; i++) {
      const title = array[i];
      const desc = pairs[title];

      const params = {
        language: req.body.language,
        genre: req.body.genre,
        title: title,
        description: desc,
      };

      const generatedStory = await generateStory(params);

      story[title] = generatedStory;
      console.log(Object.keys(story).length, "done");
    }

    res.status(200).json({ story });
  } catch (error) {
    res.send(error.message);
  }
}
