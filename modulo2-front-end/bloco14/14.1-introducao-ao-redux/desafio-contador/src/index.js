const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

// ========== REDUX ==========

// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
  store.dispatch({ type: INCREMENTO });
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
  store.dispatch({ type: DECREMENTO });
};

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
// ========== REDUCER ==========
const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTO":
      return {
        value: state.value + 1
      };
    case "DECREMENTO":
      return {
        value: state.value - 1
      };

    default:
      break;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

//LINK STORE TO HTML
store.subscribe(() => {
  const { value } = store.getState();
  showCountValue(value);
});
