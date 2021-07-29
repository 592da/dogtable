import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { useAppDispatch } from "./app/hooks";
import { seedAsync } from "./features/breeds/breedSlice";
import Header from "./app/components/Header";
import Content from "./app/containers/Content";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(seedAsync());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Content />
    </>
  );
}

export default App;
