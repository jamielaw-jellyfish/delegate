function delegate(selector, fn) {
  var fns = (typeof selector === 'string') ? { selector: fn } : selector;
  
  return function (e) {
    var target, selector;

    for (target = e.target; target && target !== e.currentTarget; target = target.parentNode) {
      for (selector in fns) {
        if (fns.hasOwnProperty(selector) && target.matches(selector)) {
          fns[selector].call(target, e);
        }
      }
    }
  }
}
