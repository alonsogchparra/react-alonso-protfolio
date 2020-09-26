import React from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { Description } from "@material-ui/icons";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import perfil from "../../media/images/perfil/perfil.png";
import ula from "../../media/images/studies/ula_logo.png";
import ua from "../../media/images/work/uakami.png";
import vascar from "../../media/images/work/vascar.png";
import likinvent from "../../media/images/work/likinvent.png";
import goapps from "../../media/images/work/goapps.png";
import translate from "../../i18n/translate";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Resume = () => {
  const classes = useStyles();
  const cv_en =
    "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_en_2020.pdf?alt=media&token=a3501a2d-3856-4cc3-9d01-002855a42a6d";
  const cv_es =
    "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_es_2020.pdf?alt=media&token=7481a4aa-b803-40ed-a3c0-5eef1875cd76";
  const isEnglish = useSelector((state) => state.translate.isEnglish);

  return (
    <div style={{ marginTop: "30px" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid>
              <Box>
                <Avatar
                  alt="Alonso Parra"
                  src={perfil}
                  className={classes.large}
                />
              </Box>
            </Grid>

            <Grid container justify="center" alignItems="center">
              <Box m={1}>
                <Typography variant="h3" className="resume-title">
                  {translate("resume")}
                </Typography>
              </Box>
              <Box m={1}>
                <a
                  href={isEnglish ? cv_en : cv_es}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Description
                    fontSize="large"
                    style={{ fontSize: "3.1875rem" }}
                    className="resume-icon"
                  />
                </a>
              </Box>
            </Grid>

            <Grid container>
              <Box width="100%" mb={2}>
                <Typography variant="h4" className="resume-education">
                  {translate("education")}
                </Typography>
                <Divider className="p-divider" />
              </Box>
            </Grid>

            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ marginBottom: "2.2rem" }}
            >
              <Box m={2}>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ marginBottom: "10px" }}
                >
                  <Avatar src={ula} className={classes.large} />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  className="resume-college"
                >
                  Universidad de los Andes. Mérida, Venezuela.
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="resume-college-time"
                >
                  {translate("january")} 2008 - {translate("december")} 2015
                </Typography>
              </Box>
            </Grid>

            <Grid container>
              <Box width="100%" mb={2}>
                <Typography variant="h4" className="resume-education">
                  {translate("experience")}
                </Typography>
                <Divider className="p-divider" />
              </Box>
            </Grid>

            <Grid container justify="center" alignItems="center">
              <Box m={2}>
                <Grid container justify="center" alignItems="center">
                  <Avatar src={ua} className={classes.large} />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  className="resume-college"
                >
                  Uakami Studios
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className="resume-college-time"
                >
                  2016 - Jun 2017
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="resume-college"
                >
                  {translate("devFrontend")}
                </Typography>
              </Box>

              <Box m={2}>
                <Grid container justify="center" alignItems="center">
                  <Avatar src={likinvent} className={classes.large} />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  className="resume-college"
                >
                  Likinvent Studios
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className="resume-college-time"
                >
                  2015 - 2017
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="resume-college"
                >
                  {translate("devGame")}, {translate("illustrator")}
                </Typography>
              </Box>

              <Box m={2}>
                <Grid container justify="center" alignItems="center">
                  <Avatar src={vascar} className={classes.large} />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  className="resume-college"
                >
                  Vascar Solutions
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className="resume-college-time"
                >
                  Jul 2017 - Mar 2018
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="resume-college"
                >
                  {translate("devFrontend")}
                </Typography>
              </Box>

              <Box m={2}>
                <Grid container justify="center" alignItems="center">
                  <Avatar src={goapps} className={classes.large} />
                </Grid>
                <Typography
                  variant="h5"
                  align="center"
                  className="resume-college"
                >
                  Go Apps
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className="resume-college-time"
                >
                  Nov 2018 - Mar 2019
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="resume-college"
                >
                  {translate("devFrontend")}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Resume;