//用于生成uuid
function getFour() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function getUUID() {
    return (getFour()+"-"+getFour()+"-"+getFour()+"-"+getFour()+"-"+getFour()+"-"+getFour()+"-"+getFour()+getFour());
}

export default getUUID;