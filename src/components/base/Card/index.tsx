import React, { ReactNode } from "react";

// Librairies
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

interface ICardProps {
  title: string;
  children: ReactNode
}

const CardComponent: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <div>{children}</div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default CardComponent;
