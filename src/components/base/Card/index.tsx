import React, { ReactNode } from "react";

// Librairies
import { Typography, Box, Card, CardContent } from "@mui/material";
import { Place } from "@mui/icons-material";

// Styles
import { useStyles } from './style'
 
interface ICardProps {
  title: string;
  children: ReactNode;
}

const CardComponent: React.FC<ICardProps> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.card }}>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <div className="flexRowAlignCenter">
            <Place />
            <Typography component="div" variant="h5">
              {title}
            </Typography>
          </div>
          <div>{children}</div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardComponent;
