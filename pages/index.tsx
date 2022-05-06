// React Js
import * as React from "react";

// Next Js
import type { NextPage } from "next";
import Head from "next/head";

// Styles
import styles from "/styles/home/Home.module.css";

// Material Ui
import { styled, useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

// Components
import Layout from "../components/layout/layout";
import HomeContent from "../components/home/homeContent";

// Styled
const Main = styled("main")(({ theme }) => ({
  minHeight: "100vh",
  padding: "6rem 4rem 4rem 4rem",
  color: theme.palette.text.primary,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Text1 = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const CodeText = styled("code")(({ theme }) => ({
  background: "#fafafa",
  borderRadius: "5px",
  padding: "0.75rem",
  fontSize: "1.1rem",
  color: "rgba(0, 0, 0, 0.87)",
}));

// Component
const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>Next App Example</title>
      </Head>
      <Main className={styles.main}>
        <Typography
          variant="h1"
          className={styles.title}
          sx={{ fontFamily: "Tahoma" }}
        >
          Welcome to
          <a href="https://nextjs.org" target="_blanck">
            <Text1>Next.js!</Text1>
          </a>
        </Typography>

        <Typography
          variant="body1"
          className={styles.description}
          sx={{ fontFamily: "Tahoma" }}
        >
          Get started by editing{" "}
          <CodeText className={styles.code} sx={{ fontFamily: "Tahoma" }}>
            pages/index.tsx
          </CodeText>
        </Typography>
        <HomeContent />
      </Main>
    </Layout>
  );
};

export default Home;
