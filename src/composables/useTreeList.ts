export const useTreeList = (list) => {
  const map = {}
  list.forEach((item) => {
    map[item.id] = item
  })
  const treeList = []
  list.forEach((item) => {
    const parent = map[item.parentId]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      treeList.push(item)
    }
  })
  return treeList
}
