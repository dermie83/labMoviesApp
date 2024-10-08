import React, {MouseEvent, useContext} from "react";
import { SiteContext } from "../../contexts/siteContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {BaseMovieProps} from "../../types/interfaces"

const AddToFavouritesIcon: React.FC<BaseMovieProps> = (movie) => {
  const context = useContext(SiteContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="medium" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;