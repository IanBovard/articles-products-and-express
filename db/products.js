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
    return dataObject.id === data.id;
  });
  if (dataIndex > -1){
    for (let prop in productData[dataIndex]) {
      if (productData[dataIndex][prop] !== dataObject[prop] && dataObject[prop] !== ''){
        productData[dataIndex][prop] = dataObject[prop];
      }
    }
    return true;
  }else{
    return dataIndex;
  }
}

function getData(){
  return productData;
}