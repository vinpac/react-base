/* eslint-disable import/prefer-default-export */

export function objectForEach(obj, fn) {
  let i = 0
  Object.keys(obj).forEach((key) => {
    fn(obj[key], key, i)
    i += 1
  })
}
