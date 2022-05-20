// React Js
import * as React from "react";

// Next Js
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// Next-auth
import { signIn, useSession } from "next-auth/react";

// Material Ui
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// Styles
import styles from "../styles/login/login.module.css";

// Components
import NetflixLoader from "../components/loader/netflix";

let LoginApp = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Box className={styles.skeletonWrapper}>
        <NetflixLoader />
      </Box>
    );
  }

  if (status === "authenticated") {
    router.push("/");
    return (
      <Box className={styles.skeletonWrapper}>
        <NetflixLoader />
      </Box>
    );
  }

  return (
    <Box className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <Card className={styles.card}>
        <CardMedia className={styles.cardMedia}>
          <Image
            src="/img/insta.png"
            alt="My Logo"
            width="150%"
            height="150%"
          />
        </CardMedia>
        <CardContent className={styles.content}>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
            className={styles.group}
            disableElevation={true}
          >
            <a
              key="one"
              href={`/api/auth/signin/google`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signIn("google");
              }}
            >
              <Button className={styles.btnGoogle}>Login with Google</Button>
            </a>
            <a
              key="one"
              href={`/api/auth/signin/facebook`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signIn("facebook");
              }}
            >
              <Button className={styles.btnFacebook}>
                Login with Facebook
              </Button>
            </a>
            <a
              key="one"
              href={`/api/auth/signin/github`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              <Button className={styles.btnGithub}>Login with GitHub</Button>
            </a>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginApp;
