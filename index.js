var customerName = ()=>{
    return "bob"
}
function upperCaseCustomerName(){
    let customer = customerName();
    console.log(customer.toUpperCase());
};
upperCaseCustomerName();
function setBestCustomer(){
    let customer = customerName();
    return "not" + customer;
}
setBestCustomer();
function overwriteBestCustomer(){
    let customer = setBestCustomer();
    let overwrite = customer.slice(3, 6);
    console.log(overwrite)
    
}
overwriteBestCustomer();
const leastFavoriteCustomer = "Caleb";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Keli";
    return leastFavoriteCustomer

}
changeLeastFavoriteCustomer();