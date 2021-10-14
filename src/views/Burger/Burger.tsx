import React, { useState, useEffect } from "react";
import { Ingredients } from "../../constants/APIs/BurgerApi";
import styled from "styled-components";
import BurgerControls from "../../components/BurgerBuilder/BurgerControls";

const WrapImg = styled.div`
  margin: auto;
`;

const ImgBurger = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 1005;
`;

const WrapIngredients = styled.div`
  margin: auto;
`;

interface Props {}
/**
 * I put object ingredients, because there is something 
 wrong wiht format for token that I send through API to get
 ingredients
 */
const ingredients = [
  { id: 1, name: "Salad", src: "salad.png" },
  { id: 2, name: "Egg", src: "egg.png" },
  { id: 3, name: "Bacon", src: "bacon.png" },
  { id: 4, name: "Cheese", src: "cheese.png" },
  { id: 5, name: "Meat", src: "meat.png" }
];

const Burger = (props: Props) => {
  const [ingredientsBu, setIngredientsBu] = useState([]);

  const [addedIngredients, setAddedIngredients]: {
    id: number;
    type: string;
    src: string;
  }[] = useState([]);

  useEffect(() => {
    async function fetchInt() {
      let IngredientsBurger = await Ingredients();
      console.log(IngredientsBurger);
      setIngredientsBu(IngredientsBurger);
    }
    fetchInt();
    // eslint-disable-next-line
  }, []);

  const addIngredient = (ing) => {
    let obj = {
      id: Math.floor(Math.random() * 100 + 1),
      type: ing,
      src: `${ing.toLowerCase()}.png`
    };
    let newArr = [...addedIngredients];
    newArr.push(obj);
    setAddedIngredients(newArr);
    console.log(newArr);
    console.log("inside add: ");
    console.log(addedIngredients);
  };

  const removeIngredient = (ing) => {
    let result = addedIngredients.find((obj) => {
      return obj.type === ing;
    });
    console.log("result remove: ");
    console.log(result);
    if (result) {
      newIngredientsArr = addedIngredients.filter(function (obj) {
        return obj.id !== result.id;
      });
      console.log("array after remove: ");
      console.log(newIngredientsArr);
      setAddedIngredients(newIngredientsArr);
    }
  };

  return (
    <>
      <WrapImg>
        <ImgBurger src="https://xm-crm-react-exercise-server.herokuapp.com/img/bun_top.png" />
        {addedIngredients.length > 0 &&
          addedIngredients.map((addedIngredient) => (
            <>
              <ImgBurger
                key={addedIngredient.id}
                alt={addedIngredient.type}
                src={`https://xm-crm-react-exercise-server.herokuapp.com/img/${addedIngredient.src}`}
              />
            </>
          ))}
        {addedIngredients.length === 0 && (
          <h3 style={{ "text-align": "center" }}>
            Please start adding your ingredients :)
          </h3>
        )}
        <ImgBurger src="https://xm-crm-react-exercise-server.herokuapp.com/img/bun_bottom.png" />
      </WrapImg>
      <WrapIngredients>
        {ingredients.map((ingredient) => (
          <BurgerControls
            key={ingredient.id}
            label={ingredient.name}
            add={() => addIngredient(ingredient.name)}
            remove={() => removeIngredient(ingredient.name)}
            //disabled={props.disabled[control.type]}
          />
        ))}
      </WrapIngredients>
    </>
  );
};

export default Burger;
