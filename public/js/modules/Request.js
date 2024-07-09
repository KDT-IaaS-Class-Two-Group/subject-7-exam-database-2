//* Fetch를 이용한 Request 요청
export const Request = async (url, value, header) => {

  if(header === undefined)
    if(value !== undefined) header = {method : "POST", body : JSON.stringify(value)};
     
  const res = await fetch(url,header);
  return await res.json();
}

