import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { Description } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import translate from "../../i18n/translate";
import perfil from "../../media/images/perfil/perfil.png";
import ula from "../../media/images/studies/ula_logo.png";
import goapps from "../../media/images/work/goapps.png";
import likinvent from "../../media/images/work/likinvent.png";
import qaroni from "../../media/images/work/qaroni.png";
import ua from "../../media/images/work/uakami.png";
import vascar from "../../media/images/work/vascar.png";
import Experience from "./Experience";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const Resume = () => {
  const classes = useStyles();
  const cv_en =
    "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_2021_english.pdf?alt=media&token=03997255-dbf0-44a3-b350-b12015bfc89a";
  const cv_es =
    "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_2021_espanol.pdf?alt=media&token=e3cd5250-3f82-483d-919a-5701eb530d02";
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
              <Experience
                imgLogo={ua}
                logoSize={classes.medium}
                place="Uakami Studios"
                time="2016 - Jun 2017"
                profession={true}
              />

              <Experience
                imgLogo={likinvent}
                logoSize={classes.medium}
                place="Likinvent Studios"
                time="2015 - 2017"
                profession={false}
              />

              <Experience
                imgLogo={vascar}
                logoSize={classes.medium}
                place="Vascar Solutions"
                time="Jul 2017 - Mar 2018"
                profession={true}
              />

              <Experience
                imgLogo={goapps}
                logoSize={classes.medium}
                place="Go Apps"
                time="Nov 2018 - Mar 2019"
                profession={true}
              />

              <Experience
                imgLogo={qaroni}
                logoSize={classes.medium}
                place="Qaroní"
                time="Oct 2021 - Mar 2021"
                profession={true}
              />

            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Resume;
