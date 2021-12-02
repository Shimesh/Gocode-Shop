import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react/cjs/react.development";
import { ProductsContext } from "../../ProductsContext";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(sliderValues) {
  const [value, setValue] = React.useState([20, 37]);
  const [products, setProducts] = useContext(ProductsContext);

  React.useEffect(() => {
    const minMax = sliderValues.value.map((item) => Math.floor(item));
    setValue(minMax);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setProducts(() => [...products, newValue]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
