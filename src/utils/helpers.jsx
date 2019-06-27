/*
 *  @func: orders the array base on their release dates.
 *
 *  @return: array of objects.
 */
const sortTitleAsc = (titles) => {
  const sortedTitles = titles;

  for (let i = 1; i < sortedTitles.length; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (sortedTitles[j].release_date > sortedTitles[i].release_date) {
        [sortedTitles[j], sortedTitles[i]] = [sortedTitles[i], sortedTitles[j]]; // swap
      }
    }
  }
  return sortedTitles;
};

export default sortTitleAsc;
