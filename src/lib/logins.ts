export async function getLoginByParams(userName: string, password: string) {
  const LOGIN_URL = `http://ps.dotis.ir/api/UserApi/login?_userName=${userName}&_pass=${password}&player_id=0&_customerTyp=9`;

  const res = await fetch(LOGIN_URL);

  return await res.json();
}
