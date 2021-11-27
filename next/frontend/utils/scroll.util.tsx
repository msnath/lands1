export const setScrollable = (scrollable: boolean) => {
  if (scrollable === true) {
    document.body.style.height = "initial";
    document.body.style.overflow = "initial";
  } else if (scrollable === false) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  }
};

export const scrollSmooth = (top: number) =>
  window.scroll({ top, behavior: "smooth" });

export const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });

export const scrollToTopInstant = () => {
  const html = document.getElementsByTagName("html");
  if (html.length > 0) {
    html[0].style.scrollBehavior = "auto";
    window.scroll({ top: 0, behavior: "auto" });
    html[0].style.scrollBehavior = "smooth";
  }
};
