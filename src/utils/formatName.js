
export function formatBusinessName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') // Remove special characters and spaces
    .trim();
}
