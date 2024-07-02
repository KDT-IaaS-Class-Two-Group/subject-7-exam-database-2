export const ListRequest = async () => {

  const response = await fetch(`${window.location.host}/list`);
  const data = await response.json();

  return data;
}