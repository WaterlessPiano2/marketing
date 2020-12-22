const getPageName = (path: string) => {
  let pageName = path.substring(1);
  pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return pageName;
};

export default getPageName;
