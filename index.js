var a = 'd';
console.log(a);
var user = {
    name: 'Bob',
    lastname: 'Flex',
    age: 25
};
console.log(user);
for (var _i = 0, _a = Object.entries(user); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key, value);
}
