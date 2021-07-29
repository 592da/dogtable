import React from "react";
import LazyLoad from "react-lazyload";
import { gallerySelector } from "../../features/breeds/breedSlice";
import { useAppSelector } from "../hooks";
import BreedCell from "./BreedCell";
import styles from "../../styles.module.css";

function Gallery() {
  const gallery = useAppSelector(gallerySelector);

  return (
    <div className={styles.gallery}>
      {gallery.map((breed, i) => (
        <LazyLoad height={200} offset={500}>
          <BreedCell key={i} breed={breed} />
        </LazyLoad>
      ))}
    </div>
  );
}

export default Gallery;
