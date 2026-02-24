import slugify from 'slugify';

export function makeSlug(title: string): string {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
  const start = Math.random().toPrecision(8).toString().substring(2, 3);
  const startIndex = Number.parseInt(start) + 2;
  const randomString = Math.random()
    .toString(36)
    .substring(startIndex, startIndex + 6);
  return `${slug}-${randomString}`;
}
