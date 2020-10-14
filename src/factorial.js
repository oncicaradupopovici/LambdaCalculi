// fact n =
//     ifte (isZero n)
//         one
//     (mul n (fact (decr n)))

// isZero n =
//     n (\_->false) true

import { True, False } from "./booleans";
import { one, mult, pred } from "./numerals";

export const isZero = (n) => n((_) => False)(True);

export const fact = (n) => isZero(n)(one)(mult(n)(fact(pred(n))));
