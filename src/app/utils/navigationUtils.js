
export const handleLinkClick = (path, isClient) => {
    if (isClient) {
      localStorage.setItem("activePath", path);
    }
  };
  