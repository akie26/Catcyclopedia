import { createElement } from "react";
import { useRouteMatch } from "react-router-dom";

const generatePage = (page) => {
  const component = () => require(`../../pages/${page}`).default;
  const error = () => require("../../pages/error").default;
  try {
    return createElement(component());
  } catch (err) {
    console.warn(err);
    return createElement(error());
  }
};

export default function PageRender() {
  const {
    params: { page },
  } = useRouteMatch();
  return generatePage(page);
}
