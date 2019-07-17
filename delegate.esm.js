export default function delegate(selector, fn) {
  const fns = (typeof selector === 'string') ? { selector: fn } : selector;
  
  return function (e) {
    for (let target = e.target; target && target !== e.currentTarget; target = target.parentNode) {
      for (let selector in fns) {
        if (fns.hasOwnProperty(selector) && target.matches(selector)) {
          fns[selector].call(target, e);
        }
      }
    }
  }
}
