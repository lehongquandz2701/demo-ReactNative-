import axios from "axios";

const getUserDetail = async () => {
  try {
    let response = await axios.get("https://randomuser.me/api");
    if (response.status != 200) {
      throw "Fail request";
    }
    if (response.data.results.length > 0) {
      let responsUser = response.data.results[0];
      let user = {};
      user.dateOfBirth = new Date(responsUser.dob.date);
      user.email = responsUser.email;
      user.gender = responsUser.gender ?? "UNKNOWN";
      user.id = `${responsUser.id.name}${responsUser.id.value}`;
      user.address = `${responsUser.location.city} ${responsUser.location.country}`;
      user.UserName = responsUser.login.username;
      user.Url = responsUser.picture.large;
      user.phone = responsUser.phone ?? "";
      user.registerDate = new Date(responsUser.registered.date);
      return user;
    }
    throw "User not found";
  } catch (error) {
    if (error.response) {
      // Yêu cầu không thành công
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // Không thể kết nối đến server
      console.error(error.request);
    } else {
      // Lỗi xảy ra khi xử lý yêu cầu
      console.error("Error", error.message);
    }
    throw error;
  }
};
const Login = () => {};
export default { getUserDetail, Login };
