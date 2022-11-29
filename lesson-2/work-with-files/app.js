const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async (filePath, action, data) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      break;
    case "add":
      await fs.appendFile(filePath, data, "utf-8");
      break;
    case "write":
      await fs.writeFile(filePath, data, "utf-8");
      break;
    default:
      console.log("Unknown action");
  }
};

// fileOperation("./files/file.txt", "read");
// fileOperation("./files/file.txt", "add", "\nSche text");
fileOperation("./files/file.txt", "write", "Novyi text");
