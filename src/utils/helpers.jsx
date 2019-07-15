/*
 *  @func: orders the array base on their release dates.
 *
 *  @return: array of objects.
 */
export const sortTitleAsc = (titles) => {
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

/*
 *  @func: removes duplicates in array of objects based on unique prop
 *
 *  @return: array of objects.
 */
export const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};

  for (let ind = 0; ind < originalArray.length; ind += 1) {
    lookupObject[originalArray[ind][prop]] = originalArray[ind];
  }

  Object.keys(lookupObject).forEach((key) => {
    newArray.push(lookupObject[key]);
  });

  return newArray;
};

export const assignYoutubeTrailer = (videos) => {
  const YOUTUBE_URLBASE = 'https://www.youtube.com/embed/';

  if (videos.length === 0) {
    return '';
  }

  const validVideos = videos.filter(video => video.site.toLowerCase() === 'youtube');
  const trailers = validVideos.filter(video => video.type.toLowerCase() === 'trailer');
  const teasers = validVideos.filter(video => video.type.toLowerCase() === 'teaser');

  if (trailers.length !== 0) {
    return YOUTUBE_URLBASE + trailers[0].key;
  }

  if (teasers.length !== 0) {
    return YOUTUBE_URLBASE + teasers[0].key;
  }

  return '';
};
