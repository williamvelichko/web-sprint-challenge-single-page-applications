import * as yup from "yup";

const formScheme = yup.object().shape({
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "x-large"], "specific size required"),
  redSauce: yup.boolean(),
  garlicRanch: yup.boolean(),
  bbqSauce: yup.boolean(),
  spinachAlfredo: yup.boolean(),
  pepperoni: yup.boolean(),
  canadianBacon: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatos: yup.boolean(),
  blackOlives: yup.boolean(),
  threeCheese: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
  glutenFree: yup.boolean(),

  extraStuff: yup.string().trim(),
});

export default formScheme;
