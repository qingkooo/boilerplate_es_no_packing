import pkg1 from "pkg1";

console.log(`测试：${pkg1()}`);

function testFormatter() {
  let a = 0;
  let unused = "";
  for (let i = 0; i < 10; i++) {
    console.log(a++);
  }
}
function testLinter() {
  let a = 0;
  for (let i = 0; i < 10; i++) {
    console.log(a++);
  }
}
testFormatter();
testLinter();
