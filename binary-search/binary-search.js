/**
 * @typedef SearchResult
 * @property { Number | null } index
 * @property { * } value
 * @property { Boolean } found
 */

/**
 * Build a search result structure
 * @param { number } index - Index of item from list
 * @param {*} value - Value of item found
 * @param { boolean } - Informs if the item is found
 * @return { SearchResult }
 */
function buildSearchResult (index = null, value = null, found = false) {
  return { index, value, found }
}

/**
 * Search by item in an ordened list
 * @param { Array } list
 * @param { * | Function } item
 * @return { SearchResult }
 */
function binarySearch(list, item) {
  if (
    !Array.isArray(list) ||
    typeof item === 'undefined' ||
    typeof item === 'null'
  ) {
    return buildSearchResult()
  }

  const fnComparator = typeof item === 'function' ? item : v => item - v

  /**
   * @param { Array } list
   * @param { * | Function } item
   * @param { number } begin
   * @param { number } end
   * @return { SearchResult }
   */
  function search(list, item, begin = 0, end = undefined) {
    if (typeof end === 'undefined') {
      end = list.length - 1
    }

    if (begin <= end) {
      const half = Math.floor((begin + end) / 2)
      const result = fnComparator(list[half], half)

      if (typeof result !== 'number') {
        return buildSearchResult()
      }

      if (result === 0) {
        return buildSearchResult(half, list[half], true)
      }

      if (result < 0) {
        return search(list, item, begin, half - 1)
      } else {
        return search(list, item, half + 1, end)
      }
    }

    return buildSearchResult()
  }

  return search(list, item, 0)
}

module.exports = {
  binarySearch
}
