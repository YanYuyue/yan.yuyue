export type Author = {
  first: string;
  middle: string[];
  last: string;
}

export function parseAuthor(authorStr: string): Author[] {
  // Remove any surrounding brackets and extra spaces
  authorStr = authorStr.trim().replace(/^\{|\}$/g, '').trim();
  
  // Split multiple authors by 'and'
  const authors = authorStr.split(/\s+and\s+/i);
  
  return authors.map(author => {
      // Initialize result
      const result: Author = {
          first: '',
          middle: [],
          last: ''
      };

      // Remove any remaining brackets
      author = author.replace(/\{|\}/g, '').trim();
      
      // Handle "lastname, firstname middlename" format
      if (author.includes(',')) {
          const [last, rest] = author.split(',').map(s => s.trim());
          result.last = last;
          
          if (rest) {
              const names = rest.split(/\s+/);
              result.first = names[0] || '';
              result.middle = names.slice(1);
          }
      }
      // Handle "firstname middlename lastname" format
      else {
          const names = author.split(/\s+/);
          
          if (names.length === 1) {
              result.last = names[0];
          } else {
              result.first = names[0];
              result.last = names[names.length - 1];
              result.middle = names.slice(1, -1);
          }
      }

      return result;
  });
}

// // Example usage:
// const testCases = [
//   "John Doe",
//   "Doe, John",
//   "John A. Doe",
//   "Doe, John A.",
//   "John Alan Doe",
//   "Doe, John Alan",
//   "{von der} Heydt, Roland",
//   "Roland {von der} Heydt",
//   "John Doe and Jane Smith",
//   "{James} {Bond}",
//   "{von} Neumann, John",
//   "John {von} Neumann"
// ];

// testCases.forEach(test => {
//   console.log(`Input: ${test}`);
//   console.log('Output:', parseAuthor(test));
//   console.log('---');
// });