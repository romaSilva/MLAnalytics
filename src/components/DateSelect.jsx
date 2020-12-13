import "date-fns";
import React, { useContext } from "react";
import GlobalContext from "../store/GlobalContext";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const { handleItemsDateChange } = useContext(GlobalContext);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    handleItemsDateChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
