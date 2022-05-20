// React Js
import * as React from "react";

// Next Js
import Link from "next/link";

// Material Ui
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// const openDrawer = "open";

let ListComponent = () => {
  const [open] = React.useState(true);
  return (
    <div>
      <List color="Primary">
        <ListItemText>
          <Typography
            sx={{
              fontFamily: "Tahoma",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
            color="primary"
          >
            Application
          </Typography>
        </ListItemText>
        <Link href="/">
          <a>
            <ListItemButton
              sx={{
                meinHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }} color="primary">
                <Typography
                  sx={{
                    fontFamily: "Tahoma",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  color="primary"
                >
                  Home
                </Typography>
              </ListItemText>
            </ListItemButton>
          </a>
        </Link>
      </List>
      <Divider sx={{ mb: 3 }} />
      <ListItemText>
        <Typography
          sx={{ fontFamily: "Tahoma", fontWeight: "bold", fontStyle: "italic" }}
          color="primary"
        >
          Projects
        </Typography>
      </ListItemText>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItemButton
            key={text}
            sx={{
              meinHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {index % 2 === 0 ? (
                <InboxIcon color="primary" />
              ) : (
                <MailIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{
                opacity: open ? 1 : 0,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default ListComponent;
