export const mapPaginationData = (linkHeader: string) => {
  let paginationData = {
    currentPage: 1,
    lastPage: 1,
  }

  const links = linkHeader?.split(',')

  if (!links.length) return paginationData

  paginationData = links?.reduce(
    (acc, link) => {
      if (link.indexOf('last') !== -1) {
        const params = link.split('&')

        const pageParam = params.filter((param) => param.indexOf('_page') !== -1)[0]

        const lastPage = Number(pageParam.split('=')[1]) || 1

        acc.lastPage = lastPage
      }

      if (link.indexOf('prev') !== -1) {
        const params = link.split('&')

        const pageParam = params.filter((param) => param.indexOf('_page') !== -1)[0]

        const currentPage = (Number(pageParam.split('=')[1]) || 1) + 1

        acc.currentPage = currentPage
      }

      if (link.indexOf('next') !== -1) {
        const params = link.split('&')

        const pageParam = params.filter((param) => param.indexOf('_page') !== -1)[0]

        const currentPage = (Number(pageParam.split('=')[1]) || 1) - 1

        acc.currentPage = currentPage
      }

      return acc
    },
    {
      currentPage: 1,
      lastPage: 1,
    },
  )

  return paginationData
}
