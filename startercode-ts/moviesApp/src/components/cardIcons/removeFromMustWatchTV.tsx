import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { SiteContext } from "../../contexts/siteContext";
import {BaseTVProps} from "../../types/interfaces";

const RemoveFromPlaylistIcon: React.FC<BaseTVProps> = (tvShow) => {
  const context = useContext(SiteContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.removeFromMustWatchTV(tvShow);
  };

return (
  <IconButton
    aria-label="remove from must watch"
    onClick={onUserRequest}
  >
    <DeleteIcon color="warning" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromPlaylistIcon;