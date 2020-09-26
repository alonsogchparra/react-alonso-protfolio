import React from "react";
import { useSelector } from "react-redux";
import {
  CssBaseline,
  Typography,
  Container,
  Grid,
  Divider,
  Box,
} from "@material-ui/core";
import {
  GitHub,
  LinkedIn,
  Email,
  Twitter,
  Description,
} from "@material-ui/icons";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import translate from "../../i18n/translate";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const cv_en =
  "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_en_2020.pdf?alt=media&token=a3501a2d-3856-4cc3-9d01-002855a42a6d";
const cv_es =
  "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_es_2020.pdf?alt=media&token=7481a4aa-b803-40ed-a3c0-5eef1875cd76";

const Dashboard = () => {
  const isEnglish = useSelector((state) => state.translate.isEnglish);
  const coinImage = useSelector((state) => state.theme.coinImage);

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className="dash-container"
          >
            <Box>
              <Grid container justify="center" alignItems="center">
                <Box m={2}>
                  <img src={coinImage} alt="lotus" width="120px" />
                </Box>
              </Grid>
              <Typography
                variant="h6"
                align="center"
                paragraph
                className="dash-title"
              >
                {translate("hi")}
              </Typography>
              <Divider variant="fullWidth" className="p-divider" />
              <Box m={2}>
                <Typography variant="h2" align="center" className="dash-name">
                  Alonso Parra
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className="dash-skill"
                >
                  {translate("profession")}
                </Typography>
              </Box>
              <Divider className="p-divider" />

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Box m={2} style={{ width: "100%" }}>
                  <Grid container justify="space-between" alignItems="center">
                    <Grid>
                      <a
                        href="https://github.com/aliens9889"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHub fontSize="large" className="dash-icon"></GitHub>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href="https://www.linkedin.com/in/alonso-parra/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn
                          fontSize="large"
                          className="dash-icon"
                        ></LinkedIn>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href="mailto:alonsogparra@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Email fontSize="large" className="dash-icon"></Email>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href="https://twitter.com/Aliens9889"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter
                          fontSize="large"
                          className="dash-icon"
                        ></Twitter>
                      </a>
                    </Grid>
                    <Grid>
                      <a
                        href={isEnglish ? cv_en : cv_es}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Description
                          fontSize="large"
                          className="dash-icon"
                        ></Description>
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Dashboard;