import React, { useContext } from "react";
import { Card, Container, Box, Button } from "@mui/material";

import { Context } from "../App";

function ItemCard({ uniqueKey, itemNumber, item, editItem }) {
  const { setItems } = useContext(Context);
  const deleteItem = () => {
    setItems((items) => {
      delete items[uniqueKey];
      return { ...items };
    });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Card variant="elevation">
          <Box
            sx={{
              display: "flex",
              padding: "0.8rem",
              justifyContent: "space-between",
              alignItems: "space-between",
              fontSize: "1.2rem",
              fontWeight: "1.5rem",
            }}
          >
            <span>{`${itemNumber}.`}</span>
            <span>{`${item}`}</span>
            <Button
              variant="contained"
              onClick={() => editItem(uniqueKey)}
              color="warning"
            >
              edit
            </Button>

            <Button variant="contained" onClick={deleteItem} color="warning">
              Delete
            </Button>
          </Box>
        </Card>
      </Container>
    </>
  );
}

export default ItemCard;
