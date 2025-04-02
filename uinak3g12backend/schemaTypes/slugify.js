export function slugify(input) {
    return input
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-') 
      .slice(0, 200);
  }