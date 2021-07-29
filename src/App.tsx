import React, { useEffect } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { seedAsync, statusSelector } from "./features/breeds/breedSlice";
import Header from "./app/components/Header";
import Gallery from "./app/containers/Gallery";
import Summary from "./app/containers/Summary";
import styles from "./styles.module.css";

function App() {
  const status = useAppSelector(statusSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(seedAsync());
  }, [dispatch]);

  if (status === "loading")
    return (
      <div>
        <img src="loading.gif" alt="loading" />
        <Typography variant="h6">Loading</Typography>
      </div>
    );

  if (status === "failed") return <div>failed to fetch data</div>;

  return (
    <>
      <CssBaseline />
      <Header />
      <div className={styles.content}>
        <Summary />
        <Gallery />
      </div>
    </>
  );
}

export default App;
