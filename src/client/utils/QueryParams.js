export const setQueryParams = (queryParams, filterKey, filterValue) => {
  return queryParams
    ? `${queryParams}&${filterKey}=${filterValue}`
    : `${filterKey}=${filterValue}`
}

export const extractQueryParams = (str) => {
  if (str !== undefined && typeof str === 'string') {
    const strToArray = str.split('&')
    let queryParamsObj = {}
    strToArray?.length &&
      strToArray.forEach((param) => {
        const paramsArr = param.split('=')
        if (paramsArr.length === 2) {
          queryParamsObj[paramsArr[0]] = !isNaN(Number(paramsArr[1]))
            ? Number(paramsArr[1])
            : paramsArr[1] === 'false'
            ? false
            : paramsArr[1] === 'true'
            ? true
            : paramsArr[1]
        }
      })
    return queryParamsObj
  }
  return {}
}
