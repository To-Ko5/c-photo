export const firstUpperCase = (title: string) => {
  const upperCaseTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return upperCaseTitle
}
