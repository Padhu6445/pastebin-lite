import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "pastes.json");

function ensureFile() {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify({}));
  }
}

function readData() {
  ensureFile();
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// CREATE PASTE WITH TTL
export function createPaste(id, content, ttlSeconds = null) {
  const data = readData();

  data[id] = {
    content,
    createdAt: Date.now(),
    expiresAt: ttlSeconds
      ? Date.now() + ttlSeconds * 1000
      : null,
    status: "ACTIVE",
  };

  writeData(data);
}

// GET PASTE (CHECK TTL)
export function getPaste(id) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const paste = data[id];

  if (!paste) return null;

  if (paste.expiresAt && Date.now() > paste.expiresAt) {
    paste.status = "EXPIRED";
    data[id] = paste;
    writeData(data);
  }

  return paste;
}