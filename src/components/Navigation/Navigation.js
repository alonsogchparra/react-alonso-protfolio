import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import * as actions from "../../store/actions";
import translate from "../../i18n/translate";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  icon: {
    flexGrow: 3,
  },
  buttons: {
    marginRight: 0,
    marginLeft: "auto",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isEnglish = useSelector((state) => state.translate.isEnglish);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const themes = useSelector((state) => state.theme.themes);
  const navImage = useSelector((state) => state.theme.navImage);
  const soundEffect = useSelector((state) => state.theme.soundEffect);
  const sound = new Audio(soundEffect);
  const isButtonPressed = useSelector((state) => state.theme.isButtonPressed);

  const setTheme = () => {
    const theme = themes[currentTheme];

    Object.keys(theme).forEach((key) => {
      const cssKey = `--${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    });
  };

  const effectsHandler = () => {
    dispatch(actions.turnOnSound());
    dispatch(actions.changeTheme());
  };

  useEffect(() => {
    if (isButtonPressed) {
      sound.play();
    }

    dispatch(actions.turnOffSound());

    setTheme();
  });

  const drawer = (
    <div>
      <List>
        <Link to="/" className="nav-side-item">
          <ListItem button>
            <ListItemText primary={translate("home")} />
          </ListItem>
        </Link>
        <Link to="/about" className="nav-side-item">
          <ListItem button>
            <ListItemText primary={translate("about")} />
          </ListItem>
        </Link>
        <Link to="/projects" className="nav-side-item">
          <ListItem button>
            <ListItemText primary={translate("project")} />
          </ListItem>
        </Link>
        <Link to="/resume" className="nav-side-item">
          <ListItem button>
            <ListItemText primary={translate("resume")} />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemText
            primary={translate("changeTheme")}
            onClick={() => effectsHandler()}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary={isEnglish ? "Español" : "English"}
            onClick={() => dispatch(actions.changeLanguage())}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={clsx(classes.appBar, "nav-bg")}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown>
            <div className={classes.icon}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Link to="/">
                  <img src={navImage} alt="" style={{ width: "40px" }} />
                </Link>
              </IconButton>
            </div>

            <div className={classes.buttons}>
              <Link to="/about" className="nav-items">
                <Button className="nb-items" color="inherit">{translate("about")}</Button>
              </Link>
              <Link to="/projects" className="nav-items">
                <Button className="nb-items" color="inherit">{translate("project")}</Button>
              </Link>
              <Link to="/resume" className="nav-items">
                <Button className="nb-items" color="inherit">{translate("resume")}</Button>
              </Link>
              <Button
                variant="outlined"
                color="inherit"
                style={{ margin: "0 10px" }}
                onClick={() => effectsHandler()}
                className="nav-btn"
                id="changeTheme"
              >
                {translate("changeTheme")}
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => dispatch(actions.changeLanguage())}
                className="nav-btn"
              >
                {isEnglish ? "Español" : "English"}
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
      </div>
    </div>
  );
};

export default Navigation;