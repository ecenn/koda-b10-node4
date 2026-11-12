/**
 * 
 * @param {string[]} data - source data
 * @param {string} user - target person
 * @returns string[]
 */
function fungsiFilter(data, user) {
  return data.filter((target)=>target.toLowerCase().includes(user.toLowerCase()));
}

export default fungsiFilter;