import slugifyLib from 'slugify';

export function slugify(str: string): string {
  return slugifyLib(str, {
    lower: true,        // lowercase all letters
    strict: true,       // remove special characters like !@#$%^&*
    trim: true,
  });
}
