
import * as fs from "fs";
import path from "path";

export const files = (dir) => {
    return fs.readdirSync(dir).filter(el => path.extname(el) === ".js").map(el => dir + "/"+el);
}