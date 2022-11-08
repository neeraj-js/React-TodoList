import React, { useContext, useState } from "react";

import { Container, Stack } from "@mui/material";
import ItemCard from "./ComponentItem";
import { Context } from "../App";
import Edittab from "./edittab";

function ComponentList() {
  const { setflag, flag, items, setItems } = useContext(Context);
  const [uniqueKey, setUniqueKey] = useState();

  const editItem = (key) => {
    setflag(true);
    setUniqueKey(key);
  };

  return (
    <>
      <Container maxWidth="lg">
        {flag && <Edittab uniquekey={uniqueKey} />}
        <Stack direction="column" spacing={2}>
          <h2>To-Do</h2>
          {Object.keys(items).map((key, index) => (
            <ItemCard
              key={index}
              itemNumber={index + 1}
              uniqueKey={key}
              item={items[key]}
              editItem={editItem}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

export default ComponentList;
