
function ajaxRequest(url,data,okCb){
	$.ajax({
		type: "post",
		timeout: 30000,
		url: url,
		data: data,
		success: function(res) {
			if (okCb && typeof okCb === 'function') {
		    	okCb(res)
		    }
			if(res.state == 0) {
				mui.toast(res.info.message, {duration: 1000,type: 'div'})
			}
		},
		error: function(res) {
			mui.toast(res.info.message, {duration: 1000,type: 'div'})
		}
	});
}


function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}