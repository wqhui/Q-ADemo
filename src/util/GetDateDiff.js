	
function GetDateDiff (dateTimeStamp) {
	  var result="";
	  var minute = 1000 * 60;
	  var hour = minute * 60;
	  var day = hour * 24;
	  var halfamonth = day * 15;
	  var month = day * 30;
	  var year = day * 365;
	  var now = new Date().getTime();
	  var diffValue = now - dateTimeStamp;
	  if(diffValue < 0){
	    //非法操作
	    return '数据出错';
	  }
	  var yearC = diffValue / year;
	  var monthC = diffValue / month;
	  var weekC = diffValue / (7 * day);
	  var dayC = diffValue / day;
	  var hourC = diffValue / hour;
	  var minC = diffValue / minute;
	  if(yearC >= 1 || monthC >= 1 || weekC >= 1){
	  	const orinDay=new Date(dateTimeStamp);
	    result = orinDay.getFullYear()+"年"+(orinDay.getMonth()+1)+"月"+orinDay.getDate()+"日";
	  	console.log(result);
	  }else if(dayC >= 1){
	    result = parseInt(dayC) + '天前';
	  }else if(hourC >= 1){
	    result = parseInt(hourC) + '小时前';
	  }else if(minC >= 1){
	    result = parseInt(minC) + '分钟前';
	  }else{

	    result = '刚刚';
	  }
	  return result;
}

export default GetDateDiff