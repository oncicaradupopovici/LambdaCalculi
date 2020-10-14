// fact n =
//     ifte (isZero n)
//         one
//     (mul n (fact (decr n)))

// isZero n =
//     n (\_->false) true

import { True, False, toBool } from "./booleans";
import { one, mult, pred } from "./numerals";

export const isZero = (n) => n((_) => False)(True);

var y = function (F) {
  return (function (x) {
    return F(function (y) {
      return x(x)(y);
    });
  })(function (x) {
    return F(function (y) {
      return x(x)(y);
    });
  });
};

const fact_ = (f) => (n) => (toBool(isZero(n)) ? one : mult(n)(f(pred(n))));
//export const fact = fact_(fact_);
export const fact = y(fact_);
