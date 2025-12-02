const envKeysArray = [
  "NODE_ENV",
] as const;
const nodeEnvArray = ["development", "production"] as const;

export type NODE_ENV = (typeof nodeEnvArray)[number];
export type ENV = (typeof envKeysArray)[number];

export default function env(key: ENV): string {
  const value = process.env[key];

  if (value) {
    return value;
  } else {
    console.log(`- Please define ${key} in as env variable.`);
    return "";
  }
}

export function nodeEnv(): NODE_ENV {
  const value = process.env["NODE_ENV" as ENV] as NODE_ENV;

  if (nodeEnvArray.includes(value)) {
    return value;
  }

  throw new Error(
    `Please define NODE_ENV env var as one of ${JSON.stringify(nodeEnvArray)}.`,
  );
}
