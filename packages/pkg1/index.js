import pkg2 from "pkg2";

export default function moduleName() {
  return `pkg1 module is dependent on ${pkg2()} module!`;
}
