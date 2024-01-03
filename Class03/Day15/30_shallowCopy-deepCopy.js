const obj = {name:"otter", gender:"male", hobby:{one:"a", two:"b"}}

obj
/*
{name: 'otter', gender:'male', hobby:{...}}
gender: "male"
hobby : {one:'a', two:'b'}
name : "otter"
*/

const shallowCopy = {...obj}

shallowCopy.hobby.one = "abc"

shallowCopy
/*
{name: 'otter', gender:'male', hobby:{...}}
gender: "male"
hobby : {one:'abc', two:'b'}
name : "otter"
*/

obj
/*
{name: 'otter', gender:'male', hobby:{...}}
gender: "male"
hobby : {one:'abc', two:'b'}
name : "otter"
*/

deepCopy = JSON.stringify(obj)
console.log(deepCopy)
// '{"name":"otter","gender":"male","hobby":{"one":"a","two":"b"}}'

deepCopy2 = JSON.parse(deepCopy)

deepCopy2
/*
{name: 'otter', gender: 'male', hobby: {…}}
gender : "male"
hobby : {one : "abc", two : "b"}
name : "otter"
[[Prototype]] : Object
*/

deepCopy2.hobby.two = 123

deepCopy2
/*
{name: 'otter', gender: 'male', hobby: {…}}
gender : "male"
hobby : {one : "abc", two : "123"}
name : "otter"
[[Prototype]] : Object
*/

obj
/*
{name: 'otter', gender: 'male', hobby: {…}}
gender : "male"
hobby : {one : "abc", two : "b"}
name : "otter"
[[Prototype]] : Object
*/





