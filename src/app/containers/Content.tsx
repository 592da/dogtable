import React from "react";
import { Typography } from "@material-ui/core";
import { statusSelector } from "../../features/breeds/breedSlice";
import { useAppSelector } from "../hooks";
import Gallery from "./Gallery";
import Summary from "./Summary";
import styles from "../../styles.module.css";

export default function Content() {
  const status = useAppSelector(statusSelector);

  if (status === "loading")
    return (
      <div>
        <img src="loading.gif" alt="loading" />
        <Typography variant="h6">Loading</Typography>
      </div>
    );

  if (status === "failed")
    return (
      <div>
        <Typography variant="h6">Failed to fetch data</Typography>
      </div>
    );

  return (
    <div className={styles.content}>
      <Summary />
      <Gallery />
    </div>
  );
}
