const employee = {
    name: 'Josh',
    streetAddress: 'East 14th'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee ={...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(emplyee, key, value) {
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}
function destruvtivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}