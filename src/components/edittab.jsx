import React, { useContext } from "react";
import { Context } from "../App";

import {
  Container,
  Grid,
  Stack,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";

function Edittab(props) {
  console.log("edit keri");
  const { setItems, setflag } = useContext(Context);

  const handleEdit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const item = data.get("newItem");

    setItems((items) => {
      items[props.uniquekey] = item;
      return { ...items };
    });
    setflag(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" marginTop={5}>
          <Stack
            component="form"
            onSubmit={handleEdit}
            direction="row"
            alignItems="center"
            spacing={3}
            value={props.olditem}
          >
            <InputLabel>Edit Item</InputLabel>
            <TextField name="newItem" type="text" />
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  );
}

export default Edittab;
