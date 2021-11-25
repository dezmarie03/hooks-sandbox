import {
  useState,
  useContext,
  createContext,
} from "react";

const AnimalContext = createContext([
  {
    type: "puppy",
    count: 1,
  },
  (obj) => obj
]);

const LevelFive = () => {
  const [animal, setAnimal] = useContext(AnimalContext);
  const suffix = animal.count > 1 ? "s" : "";

  return (
    <div>
      <h2>useContext</h2>
      <div>
        <button
          onClick={() => {
            setAnimal(Object.assign({}, animal, { count: animal.count + 1 }));
          }}
        >
          +
        </button>&nbsp;
        <strong>{`${animal.count} ${animal.type}${suffix}`}</strong>
      </div>
    </div>
  );
};

const LevelFour = () => {
  return (<div><LevelFive /></div>);
};

const LevelThree = () => {
  return (<div><LevelFour /></div>);
};

const LevelTwo = () => {
  return (<div><LevelThree /></div>);
};

const ContextComponent = () => {
  const animalState = useState({
    type: "kitten",
    count: 1,
  });

  return (
    <AnimalContext.Provider value={animalState}>
      <LevelTwo />
    </AnimalContext.Provider>
  );
};

export default ContextComponent;
