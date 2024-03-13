import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Rating from "./Rating";

const defaultTheme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    marginBottom: defaultTheme.spacing(2),
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card className={classes.root}>
        <CardActionArea component={Link} to={`/product/${product._id}`}>
          <CardMedia
            component="img"
            alt={product.name}
            height="300"
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Rating value={product.rating} text={product.numReviews} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
};

export default Product;
