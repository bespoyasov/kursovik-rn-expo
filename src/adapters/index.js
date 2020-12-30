import parser from "react-native-xml2js";
import { promisify, toComputable } from "../utils";

const toJson = promisify(parser.parseString);
const format = (str) => Number(toComputable(str).toFixed(2));

export async function parseValues(xmlData) {
  const data = await toJson(xmlData);
  const records = data?.ValCurs?.Record ?? [];
  const [today, tomorrow] = records;

  return {
    today: format(today?.Value),
    tomorrow: format(tomorrow?.Value),
  };
}
