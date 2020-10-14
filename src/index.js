import "./styles.css";
import { True, False, and, or, toBool } from "./booleans";
import { zero, one, two, toNumber, add, succ, pred, mult } from "./numerals";
import { isZero, fact } from "./factorial";

const print = (x) => (document.getElementById("app").innerHTML += x);
const tag = (t) => (x) => print(`<${t}>${x}</${t}>`);

const h1 = tag("h1");
const h3 = tag("h3");
const h5 = tag("h5");
const pre = tag("pre");

h1("Functional Guy");
h3("Chapter1. Lambda calculus");
h5("Booleans");
pre(`
  True = ${toBool(True)}
  False = ${toBool(False)}
  True and False = ${toBool(and(True)(False))}
  True and True = ${toBool(and(True)(True))}
  True or False = ${toBool(or(True)(False))}
  False or False = ${toBool(or(False)(False))}
`);
h5("Numbers");
pre(`
  zero            = ${toNumber(zero)}
  one             = ${toNumber(one)}
  two             = ${toNumber(two)}
  zero + one      = ${toNumber(add(zero)(one))}
  one + two       = ${toNumber(add(one)(two))}
  succ two        = ${toNumber(succ(two))}
  pred zero       = ${toNumber(pred(zero))}
  pred two        = ${toNumber(pred(two))}
  pred succ two   = ${toNumber(pred(succ(two)))}
  mult two two    = ${toNumber(mult(two)(two))}
`);

h5("Factorial");
pre(`
  isZero zero             = ${toBool(isZero(zero))}
  isZero one              = ${toBool(isZero(one))}
  fact zero               = ${toNumber(fact(zero))}
  fact one                = ${toNumber(fact(one))}
  fact two                = ${toNumber(fact(two))}
  fact (succ two)         = ${toNumber(fact(succ(two)))}
  fact (succ (succ two))  = ${toNumber(fact(succ(succ(two))))}
`);
