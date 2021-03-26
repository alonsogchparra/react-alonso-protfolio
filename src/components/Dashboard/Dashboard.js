import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import {
  Description,
  Email,
  GitHub,
  LinkedIn,
  Twitter
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const cv_en =
  "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_2021_english.pdf?alt=media&token=03997255-dbf0-44a3-b350-b12015bfc89a";
const cv_es =
  "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-files.appspot.com/o/curriculums%2Falonso_cv_2021_espanol.pdf?alt=media&token=e3cd5250-3f82-483d-919a-5701eb530d02";

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
                  <Grid container justify="space-around" alignItems="center">
                    <Grid>
                      <a
                        href="https://github.com/alonsogchparra"
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
                        href="https://twitter.com/alonsogchparra"
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

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Box m={2}>
                  <Link to="/about">
                    <Button className="animate__animated animate__pulse animate__slow animate__infinite">
                      <Typography
                        variant="h4"
                        align="center"
                        className="dash-name"
                      >
                        {translate('checkMoreAboutMe')}
                      </Typography>
                    </Button>
                  </Link>
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
