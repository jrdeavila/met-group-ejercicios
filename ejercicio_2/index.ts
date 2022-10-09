import MyOperation from "./MyOperation";

const examples = [
  new MyOperation("hello world"), // A
  new MyOperation("2 + 10 / 2 - 20"), // B
  new MyOperation("(2 + 10) / 2 - 20"), // C
  new MyOperation("(2 + 10 / 2 - 20"), // D
  new MyOperation("(2/-3)-3*-5+(-3/-4)"),
  new MyOperation("(2/abc)-3*-5+(hello)"),
];

examples.forEach((item, i) => {
  console.log(`Example: ${i + 1}`);
  console.log(item.operation());
  console.log(item.compute());
  console.log("\n");
});
