import { useState, useEffect } from "react";

export const ViewsDogs = () => {
  const [imageDog, setImageDog] = useState([]);
  const [update, setUpdate] = useState(false);
  let dogApi = "https://dog.ceo/api/breeds/image/random/2";

  let updateDogs = () => {
    setUpdate(true);
  };

  useEffect(() => {
    async function apiDog() {
      let dog = await fetch(dogApi);
      let dogResonse = await dog.json();
      let { message } = dogResonse;
      setImageDog(message);
      setUpdate(false);
    }
    apiDog();
  }, [update]);

  return (
    <>
      {imageDog.map((dog) => {
        return (
          <div key={dog} className="flex-dog">
            <img src={dog} alt=""/>
          </div>
        );
      })}

      <div className="a">
      <button onClick={updateDogs} > New Dog :3 </button>

      </div>
      
    </>
  );
};
