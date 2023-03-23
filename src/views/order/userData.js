import * as Api from "../api.js";

export async function insertUserData(
  inputnameTag,
  addressTag,
  emailTag,
  phoneNumTag
) {
  let userData = await Api.get("/api/user");

  const { email, name, phoneNum, address } = userData;

  inputnameTag.value = name;
  addressTag.value = address;
  emailTag.value = email;
  phoneNumTag.value = phoneNum;
}
