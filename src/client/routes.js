import React from "react"
import App from "./app"
import HomePage from "./pages/homePage"
import NotFoundPage from "./pages/notFound404Page"

export default [
  {
    path: "/",
    exact: true,
    ...App,
    routes: [
      {
        ...HomePage,
      },
    ],
  },
  {
    path: "/search",
    exact: true,
    ...App,
    routes: [
      {
        ...HomePage,
      },
    ],
  },
  {
    path: "/",
    ...App,
    routes: [
      {
        ...NotFoundPage,
      },
    ],
  },
]