/* jshint esversion:6 */
module.exports = {
  getData : getData,
  postData : postData,
};
let productData = [];
let id = 1;

function postData (dataObject) {
  let dataValidate = productData.every((data)=>{
    return data.name !== dataObject.name;
  });
  console.log(dataValidate);
  if (dataValidate){
    dataObject.id = id;
    id++;
    productData.push(dataObject);
    return true;
  }else{
    return false;
  }
}


function getData(){
  return productData;
}