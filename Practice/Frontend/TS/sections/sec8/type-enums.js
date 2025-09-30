var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var packageStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(packageStatus));
// Returns true
var HTTPResponse;
(function (HTTPResponse) {
    HTTPResponse[HTTPResponse["OK"] = 200] = "OK";
    HTTPResponse[HTTPResponse["NOTAUTHORIZED"] = 401] = "NOTAUTHORIZED";
    HTTPResponse[HTTPResponse["NOTFOUND"] = 404] = "NOTFOUND";
    HTTPResponse[HTTPResponse["CONNECTIONERROR"] = 500] = "CONNECTIONERROR";
})(HTTPResponse || (HTTPResponse = {}));
var Directions;
(function (Directions) {
    Directions["UP"] = "arrowUp";
    Directions["DOWN"] = "arrowDown";
    Directions["LEFT"] = "arrowLeft";
    Directions["RIGHT"] = "arrowRight";
})(Directions || (Directions = {}));
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["MON"] = "Monday";
    DaysOfWeek["TUES"] = "Tuesday";
    DaysOfWeek["WED"] = "Wednesday";
    DaysOfWeek["THUR"] = "Thursday";
    DaysOfWeek["FRI"] = "Friday";
    DaysOfWeek["SAT"] = "Saturday";
    DaysOfWeek["SUN"] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
function printDay(today) {
    return today === DaysOfWeek.TUES;
}
console.log(printDay("Tuesday"));
