const today = () => {
  let date = new Date();
  let month = (1 + date.getMonth()).toString();
  let day = date.getDate().toString();
  let year = date.getFullYear();

  month = month.length > 1 ? month : "0" + month;
  day = day.length > 1 ? day : "0" + day;

  return `${month}/${day}/${year}`;
};

export default today;
