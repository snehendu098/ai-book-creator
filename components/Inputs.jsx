import { Input, Select, Option, Button } from "@material-tailwind/react";

const genre = [
  "suspenseful",
  "romantic",
  "adventure stories",
  "fairy tales",
  "fantasy",
  "horror",
  "mystery",
  "romance",
  "science fiction",
];

const Layout = ({ children }) => <div className="mb-5 w-full">{children}</div>;

export default function CustomBookForm({ values, setValues, handleClick }) {
  return (
    <div className="w-2/6 overflow-y-auto bg-white h-full flex items-center flex-col p-6">
      <h1 className="text-5xl font-semibold  mb-6  text-blue-gray-700">
        Create your custom book
      </h1>

      <Layout>
        <Input
          label="Choose your language"
          onChange={(e) => setValues({ ...values, language: e.target.value })}
        />
      </Layout>

      <Layout>
        <Select
          label="Select Genre"
          onChange={(e) => setValues({ ...values, genre: e })}
        >
          {genre.map((item) => (
            <Option key={item} value={item}>
              {item.toUpperCase()}
            </Option>
          ))}
        </Select>
      </Layout>

      <Layout>
        <p className="text-blue-gray-500 font-semibold mb-6">
          Enter the names (Optional Fields)
        </p>
        <Input
          onChange={(e) =>
            setValues({ ...values, mainCharacter: e.target.value })
          }
          label="Main character(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, mothers: e.target.value })}
          label="Mother(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, fathers: e.target.value })}
          label="Father(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) =>
            setValues({ ...values, grandmothers: e.target.value })
          }
          label="Grandmother(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) =>
            setValues({ ...values, grandfathers: e.target.value })
          }
          label="Grandfather(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, aunts: e.target.value })}
          label="Aunt(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, uncles: e.target.value })}
          label="Uncle(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, friends: e.target.value })}
          label="Friend(s)"
        />
      </Layout>

      <Layout>
        <Input
          onChange={(e) => setValues({ ...values, animals: e.target.value })}
          label="Animal(s)"
        />
      </Layout>

      <div
        onClick={handleClick}
        className="w-full bg-blue-500 text-white font-bold uppercase text-center p-2 rounded-md cursor-pointer hover:bg-blue-300 "
      >
        Generate a book
      </div>
    </div>
  );
}
