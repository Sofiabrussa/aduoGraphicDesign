import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDialog({ open, onClose, project }) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", background: "#000" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            {project?.title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* CONTENIDO */}
      <div style={{ padding: "32px" }}>
        <img
          src={project?.img}
          alt={project?.title}
          style={{
            width: "100%",
            maxHeight: "70vh",
            objectFit: "cover",
            borderRadius: "20px",
            marginBottom: "24px"
          }}
        />

        <Typography variant="h5" gutterBottom>
          {project?.title}
        </Typography>

        <Typography variant="body1">
          {project?.description}
        </Typography>
      </div>
    </Dialog>
  );
}
