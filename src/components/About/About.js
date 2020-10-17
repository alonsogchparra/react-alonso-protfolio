import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Container,
  Grid,
  Box,
  Divider,
  CssBaseline,
} from "@material-ui/core";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const About = () => {
  const coinImage = useSelector((state) => state.theme.coinImage);

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
            <Box mb={2} width="100%">
              <Typography variant="h3" align="center" className="about-title">
                {translate("aboutMe")}
              </Typography>
              <Divider variant="fullWidth" className="p-divider" />
            </Box>
            <Grid>
              <img src={coinImage} alt="element" style={{ width: "120px" }} />
            </Grid>
            <Box my={2}>
              <Typography
                variant="subtitle2"
                align="center"
                className="about-text"
              >
                {translate("aboutSub")}
              </Typography>
            </Box>

            <Box paddingX={5}>
              <Typography align="left" className="about-text" paragraph>
                {translate("aboutLineOne")} <strong>{translate("name")}</strong>.{" "}
                {translate("aboutLineOneNext")}
              </Typography>
              <Typography
                align="left"
                paragraph="true"
                className="about-text"
              >
                {translate("aboutLineTwo")}{" "}
                <strong>{translate("college")}</strong>.{" "}
                {translate("aboutLineTwoNext")}
              </Typography>
              <Typography
                align="left"
                paragraph="true"
                className="about-text"
              >
                {translate("aboutLineThree")}{" "}
                <strong>{translate("frontend")}</strong>,{" "}
                <strong>{translate("mobile")}</strong>,{" "}
                <strong>{translate("illustration")}</strong> {translate("and")}{" "}
                <strong>{translate("game")}</strong>.
                {translate("aboutLineThreeNext")}{" "}
                <strong>
                <code className="about-code">{translate("javascript")}</code>
                </strong>{" "}
                {translate("aboutLineThreeNextOne")}{" "}
                <strong>
                  <code className="about-code">{translate("react")}</code>
                </strong>
                , {translate("with")}{" "}
                <strong>
                  <code className="about-code">{translate("csharp")}</code>
                </strong>{" "}
                {translate("developing")}{" "}
                <strong>
                  <code className="about-code">{translate("unity")}</code>
                </strong>
                . {translate("for")}{" "}
                <strong>{translate("illustrations")}</strong>{" "}
                {translate("work")}{" "}
                <strong>
                  <code className="about-code">{translate("ai")}</code>
                </strong>
                . {translate("aboutLineThreeNextTwo")}{" "}
                <strong>
                  <code className="about-code">{translate("native")}</code>
                </strong>{" "}
                {translate("try")}{" "}
                <strong>
                  <code className="about-code">{translate("node")}</code>
                </strong>{" "}
                {translate("whyNot")}. {translate("live")}{" "}
                <strong>Venezuela</strong>.
              </Typography>
              <Typography
                align="left"
                paragraph="true"
                className="about-text"
              >
                {translate("aboutLineFour")}
              </Typography>
              <Typography
                align="left"
                paragraph="true"
                className="about-text"
              >
                {translate("aboutLineFive")}{" "}
                <strong>
                  <Link to="/projects" className="about-code">
                    {translate("projects")}
                  </Link>
                </strong>{" "}
                {translate("aboutLineFiveOne")}
              </Typography>
            </Box>
            <Box width="100%">
              <Divider variant="fullWidth" className="p-divider" />
              <Box py={2}>
                <Typography variant="h5" align="center" className="about-text">
                  {translate("aboutLineSix")}
                </Typography>
                <Typography align="center" className="about-text">
                  {translate("aboutLineSeven")}{" "}
                  <strong>
                    <Link to="/resume" className="about-code">
                      {translate("here")}
                    </Link>
                  </strong>
                  .
                </Typography>
              </Box>
              <Divider variant="fullWidth" className="p-divider" />
            </Box>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default About;