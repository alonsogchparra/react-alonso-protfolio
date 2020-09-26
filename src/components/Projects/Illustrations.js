import React, { useState } from "react";
import {
  GridList,
  GridListTile,
  IconButton,
  Dialog,
  GridListTileBar,
  withWidth,
  isWidthDown,
  isWidthUp,
} from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import { illustrations } from "../../content/illustrations";

const Illustrations = (props) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const closeHandler = () => {
    setOpen(false);
  };

  const openHandler = (img) => {
    setCurrentImg(img);
    setOpen(true);
  };

  const getGridListCols = (screenWidth) => {
    if (isWidthUp("sm", screenWidth)) {
      return 3;
    }

    if (isWidthDown("sm", screenWidth)) {
      return 1;
    }
  };

  const cols = getGridListCols(props.width);

  return (
    <div>
      <GridList cols={cols}>
        {illustrations.map((project, i) => (
          <GridListTile key={i}>
            <img src={project.image} alt={project.name} />
            <GridListTileBar
              title={project.name}
              subtitle={
                project.developed.length > 1
                  ? project.developed.map((dev) => dev + ", ")
                  : project.developed.map((dev) => dev)
              }
              actionIcon={
                <IconButton onClick={() => openHandler(project.image)}>
                  <ZoomInIcon style={{ color: "white" }} />
                </IconButton>
              }
            ></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>

      <Dialog
        aria-modal="false"
        open={open}
        onClose={() => closeHandler()}
        maxWidth="md"
      >
        <img src={currentImg} alt="Illustration" style={{ width: "100%" }} />
      </Dialog>
    </div>
  );
};

export default withWidth()(Illustrations);