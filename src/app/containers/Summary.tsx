import { ListItem, ListItemText, List } from "@material-ui/core";
import { useMemo } from "react";
import {
  breedSelector,
  breedsSelector,
} from "../../features/breeds/breedSlice";
import { useAppSelector } from "../hooks";
import { store } from "../store";
import styles from "../../styles.module.css";


function SummaryBreed({ breed }: { breed: string }) {
  const state = useAppSelector((app) => breedSelector(app, { breed }));
  return (
    <ListItem key={breed}>
      <ListItemText
        primary={breed}
        secondary={`count: ${state?.count}, likes: ${state?.likes}`}
      />
    </ListItem>
  );
}

function Summary() {
  const breeds = useMemo(() => breedsSelector(store.getState()), []);
  return (
    <div className={styles.summary}>
      <List>
        {breeds.map((breed) => (
          <SummaryBreed breed={breed} />
        ))}
      </List>
    </div>
  );
}

export default Summary;
