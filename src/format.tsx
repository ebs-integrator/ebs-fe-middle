interface Data {
  [field: string]: any;
}
const REGEX_TEXT = /{(.+?)}+/g;
// To remove the brackets from the string
const REGEX_SUBSTRING = /[{}]/g;

function trim(substring: string) {
  return substring && substring.replace(REGEX_SUBSTRING, '').trim();
}

export default function format(message: string, data: Data, lang: string): string {
  if (!message || message.trim().length === 0) return message;
  const templateArray = message.match(REGEX_TEXT);

  if (!templateArray) return message;

  return templateArray.reduce((newMessage, substring) => {
    if (!substring.includes(',')) return newMessage.replace(substring, data[trim(substring)] || '');

    // In case the construct is different than a e.g. loop
    const substringOptions = substring.split(',');
    const key = trim(substringOptions[0]);
    if (data[key] === null || data[key] === undefined) return newMessage.replace(substring, '');
    const type = trim(substringOptions[1]);

    switch (type) {
      // You can add custom template interpolation types here
      case 'date': {
        const value = new Intl.DateTimeFormat(lang).format(new Date(data[key]));
        return newMessage.replace(substring, value);
      }
      case 'number': {
        const value = new Intl.NumberFormat(lang).format(data[key]);
        return newMessage.replace(substring, value);
      }
      default: {
        throw new Error('Unknown template interpolation type');
      }
    }
  }, message);
}
