function toCBRFormat(raw) {
  const date = new Date(raw);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export async function getData() {
  const today = toCBRFormat(new Date());
  const tomorrow = toCBRFormat(new Date().setDate(new Date().getDate() + 1));
  const url = `http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=${today}&date_req2=${tomorrow}&VAL_NM_RQ=R01235`;
  const response = await fetch(url);
  return await response.text();
}
