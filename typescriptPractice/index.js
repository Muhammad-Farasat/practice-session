// interface User{
//     name: string,
//     role: "admin" | "user"
// }
function convertTupleToString(tup) {
    var converted = tup.join();
    console.log(converted);
}
convertTupleToString([10, 22, 56]);
