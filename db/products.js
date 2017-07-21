/* jshint esversion:6 */
module.exports = {
  getData : getData,
  postData : postData,
  putIndex : putIndex,
};
let productData = [];
let id = 1;

function postData (dataObject) {
  let dataValidate = productData.every((data)=>{
    return data.name !== dataObject.name;
  });
  if (dataValidate){
    dataObject.id = id;
    id++;
    productData.push(dataObject);
    return true;
  }else{
    return false;
  }
}

function putIndex (dataObject){
  let dataIndex = productData.findIndex((data)=>{
    return parseInt(dataObject.id) === data.id;
  });
  for (let prop in productData[dataIndex]) {
    if (productData[dataIndex][prop] !== dataObject[prop] && dataObject[prop] !== ''){
      productData[dataIndex][prop] = dataObject[prop];
    }
  }
}

function getData(){
  return productData;
}