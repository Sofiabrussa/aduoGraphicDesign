import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectDialog.css";
import ProjectGallery from "./ProjectGallery";
import "../../App.css"

export default function ProjectDialog({ open, onClose, project }) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullScreen
          open={open}
          onClose={onClose}
          PaperProps={{
            component: motion.div,
            initial: { y: "120%", scaleY: 0.85, opacity: 0 },
            animate: { y: 0, scaleY: 1, opacity: 1 },
            exit: { y: "80%", scaleY: 0.9, opacity: 0 },
            transition: {
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* APP BAR */}
          <AppBar sx={{ position: "relative", background: "#000", zIndex: 5 }}>
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

          {/* WRAPPER CON OLA */}
          <div className="modal-wave-wrapper">
            {/* BORDE ONDULADO */}
            <motion.div
              className="modal-wave-edge"
              initial={{ scaleY: 0.6, y: 40 }}
              animate={{ scaleY: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            
            {/* CONTENIDO */}
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <motion.img
                src={project?.img}
                alt={project?.title}
                style={{
                  width: "100%",
                  maxHeight: "55vh",
                  objectFit: "cover",
                  borderRadius: "20px",
                  marginBottom: "24px",
                }}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              />
              <Typography
                component="h2"
                className="card-title"
                gutterBottom
              >
                {project?.title}
              </Typography>

              <Typography
                component="p"
                className="card-text"
              >
                {project?.description}
              </Typography>

              <ProjectGallery images={project?.gallery} />
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
