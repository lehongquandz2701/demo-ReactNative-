import moment from "moment/moment";
export const ConvertDateTimeToString = (dateTime) => {
  return moment(dateTime).format("DD-MM-YYYY");
};
