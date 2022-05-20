// Material Ui
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

// Styles
import styles from "../../styles/home/infoHome.module.css";

// Constants
let app = "ReactJS";
let wilcard = "doesn't";

// Styled
const MyCard = styled(Card)(({ theme }) => ({
  margin: "1rem",
  textAlign: "left",
  color: theme.palette.text.primary,
  textDecoration: "none",
  border: "1px solid #eaeaea",
  backgroundColor: theme.palette.background.default,
  borderRadius: "10px",
  transition: "color 0.15s ease",
  borderColor: "0.15s ease",
  maxWidth: "300px",
  "&:hover": {
    color: theme.palette.primary.main,
    border: "1px solid #ff9800",
  },
}));

const Info = styled(Typography)(({ theme }) => ({
  margin: "0 0 1rem 0",
  fontSize: "1.5rem",
  fontFamily: "Tahoma",
  fontWeight: "bold",
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  margin: "0",
  fontSize: "1.25rem",
  lineHeight: "1.5",
}));

let InfoContent = () => {
  return (
    <div className={styles.grid}>
      <a href="https://mui.com/" target="_blanck">
        <MyCard>
          <CardActionArea>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Info variant="h2" sx={{ fontFamily: "Tahoma" }}>
                Design &rarr;
              </Info>
              <Paragraph variant="body1" sx={{ fontFamily: "Tahoma" }}>
                Move faster with {app} intuitive UI tools with Material Ui.
              </Paragraph>
            </CardContent>
          </CardActionArea>
        </MyCard>
      </a>

      <a href="https://www.mongodb.com/" target="_blanck">
        <MyCard>
          <CardActionArea>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Info variant="h2" sx={{ fontFamily: "Tahoma" }}>
                Database &rarr;
              </Info>
              <Paragraph variant="body1" sx={{ fontFamily: "Tahoma" }}>
                Working with data {wilcard} have to be difficult when using
                MongoDb.
              </Paragraph>
            </CardContent>
          </CardActionArea>
        </MyCard>
      </a>
    </div>
  );
};

export default InfoContent;
