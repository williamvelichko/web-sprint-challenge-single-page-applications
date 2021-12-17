import * as yup from "yup";

const formScheme = yup.object().shape({
  size: yup
    .string()
    .oneOf(["small", "medium", "large", "x-large"], "specific size required"),
  //   redSauce: yup.boolean(),
  //   garlicRanch: yup.boolean(),
  //   bbqSauce: yup.boolean(),
  //   spinachAlfredo: yup.boolean(),

  //   sauce: yup.string().oneOf([""], "sauce required"),
  sauce: yup
    .string()
    .required(
      ["redSauce", "garlicRanch", "bbqSauce", "spinachAlfredo"],
      "sauce required"
    ),
  name: yup
    .string()
    .trim()
    .required("name is required")
    .min(2, "name must be at least 2 characters"),

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
