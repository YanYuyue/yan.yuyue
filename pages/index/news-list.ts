import newsListRaw from './_news_list.md';

// Match date formats: YYYY-MM-DD, YYYY/MM/DD
const datePattern = /^#\s*date\s*:\s*((\d{4}\s*[-/]\s*\d{1,2}\s*[-/]\s*\d{1,2}))\s*$/;

function concatAndSanitizeString(input: string[]) {
  let ret = input.join('\n');
  ret = ret.replace(/^[\s\n\r]+/, '');
  ret = ret.replace(/[\s\n\r]+$/, '');
  return ret;
}

function parseDate(input: string) {
  input = (input || '').replace(/\s+/g, '');
  const [y, m, d] = input.split(/[-/]/g, 3);
  return {
    year: Number.isNaN(y) ? 1 : Number(y),
    month: Number.isNaN(m) ? 1 : Number(m), // 1-based
    day: Number.isNaN(d) ? 1 : Number(d),
  };
}

export type DateType = ReturnType<typeof parseDate>;

export type NewsItem = [DateType, string];

export type NewsType = {
  header: string;
  sections: NewsItem[];
};

function splitByDateMarkers(input: string): NewsType {

  const lines = input.split('\n');
  const result: NewsType = {
    header: '',
    sections: []
  };

  let currentDate = '';
  let currentContent: string[] = [];

  datePattern.lastIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(datePattern);

    if (match) {
      // If we have accumulated content for a previous date, save it
      if (currentDate) {
        result.sections.push([parseDate(currentDate), concatAndSanitizeString(currentContent)]);
        currentContent = [];
      } else if (currentContent.length > 0) {
        // This is content before any date marker
        result.header = concatAndSanitizeString(currentContent);
        currentContent = [];
      }

      // Store the new date, normalize to YYYYMMDD format
      currentDate = match[1];
    } else {
      currentContent.push(line);
    }
  }

  // Handle the last section
  if (currentDate) {
    result.sections.push([parseDate(currentDate), concatAndSanitizeString(currentContent)]);
  } else if (currentContent.length > 0) {
    result.header = concatAndSanitizeString(currentContent);
  }

  return result;
}

export default splitByDateMarkers(newsListRaw);