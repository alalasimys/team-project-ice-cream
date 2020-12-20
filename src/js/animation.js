(() => {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  const elements = document.querySelectorAll('.anim-show');
  const elem = document.querySelectorAll('.animate__animated');

  window.onscroll = () => {
    elements.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('active');
      }
    });

    elem.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('animate__heartBeat');
      }
    });
  }
})();
