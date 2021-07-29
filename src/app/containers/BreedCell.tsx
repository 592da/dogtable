import { useState, useEffect, useCallback } from "react";
import { Chip } from "@material-ui/core";
import { like, breedSelector } from "../../features/breeds/breedSlice";
import { getRandomBreedImage } from "../utils/dogsAPI";
import { useAppDispatch, useAppSelector } from "../hooks";
import styles from "../../styles.module.css";

const loadingImage = "loading.gif";
const errorImage = "error.png";

function BreedCell({ breed }: { breed: string }) {
  const [state, setstate] = useState<string | null | false>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getRandomBreedImage(breed)
      .then((url) => setstate(url))
      .catch((e) => {
        setstate(false);
      });
  }, [breed]);

  const handleClick = useCallback(() => {
    dispatch(like(breed));
  }, [breed,dispatch]);

  const likes = useAppSelector((app) => breedSelector(app, { breed })?.likes);
  const url = state ? state : state === false ? errorImage : loadingImage;

  return (
    <div
      onClick={handleClick}
      className={styles.dog}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      {likes > 0 && (
        <Chip label={`${likes} ${likes === 1 ? "Like" : "Likes"}`} />
      )}
    </div>
  );
}

export default BreedCell;
