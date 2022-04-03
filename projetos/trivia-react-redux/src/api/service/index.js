export const triviaApi = 'https://opentdb.com/api_token.php?command=request';
export const gravatarApi = (user) => `https://www.gravatar.com/avatar/${user}`;
export const questionGame = (token) => `https://opentdb.com/api.php?amount=5&token=${token}`;

export async function getToken() {
  const response = await fetch(triviaApi);
  const responseJSON = await response.json();
  return responseJSON;
}
