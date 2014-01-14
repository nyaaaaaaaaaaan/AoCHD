$(document).ready(function(){
	
	function sum_rate(){
		var team1_rate = 0;
		var team2_rate = 0;
		for (var i=9; i<=16; i++){
			if(i % 2 != 0){
				if($.isNumeric(parseInt($('*[name=rate'+i+']').val())) === true){
					team1_rate = team1_rate + parseInt($('*[name=rate'+i+']').val());
				}
			} else {
				if($.isNumeric(parseInt($('*[name=rate'+i+']').val())) === true){
					team2_rate = team2_rate + parseInt($('*[name=rate'+i+']').val());
				}
			}
		}
		
		$('*[name=team1_sum]').val(team1_rate);
		$('*[name=team2_sum]').val(team2_rate);
	}
	
	$('#game_start').click(function(){
		if(member_check() != true) return false;
		
		var $form = $('#matching_result');
	    var data = $form.serializeArray();
	    
	    $.ajax({
			type: 'POST',
			url: 'gaming',
			data: data,
			dataType: 'html',
			timeout: 10000,  // 単位はミリ秒
		    
			// 送信前
			beforeSend: function(xhr, settings) {
				// ボタンを無効化し、二重送信を防止
				$('#game_start').attr('disabled', true);
			},
			// 応答後
			complete: function(xhr, textStatus) {
			},

			success: function (data, dataType) {
				$("#gaming").html(data);
			},

			error: function ( XMLHttpRequest, textStatus, errorThrown ) {
				this;
				alert('Error : ' + errorThrown);
		    }
		});
	    
	    return false;
	});
	
	$('#win_team1').click(function(){
		if(time_check(new Date($(this).attr('name').replace(/-/g, '/'))) != true) return false;
		end_time = getNowDateTime(new Date());
		report_check('report', 1, $('#gameid').attr('name'), $(this).attr('name'), end_time, 'maketeam');
	});
	
	$('#win_team2').click(function(){
		if(time_check(new Date($(this).attr('name').replace(/-/g, '/'))) != true) return false;
		end_time = getNowDateTime(new Date());
		report_check('report', 2, $('#gameid').attr('name'), $(this).attr('name'),  end_time, 'maketeam');
	});
	
	$('#game_cancel').click(function(){
		cancel_check('cancel', 2, $('#gameid').attr('name'), 'maketeam');
	});
	
	function cancel_check(action, team, id, option) {
		jConfirm('ゲームをキャンセルしますか?', '確認', function(r) {
	        if (r === true) {
	        	var data = new Array;
	        	data = {'game_id': id, 'option': option};
	        	submit_action('cancel', data, null);
	        	return false;
	        } else {
	            jAlert('はい。', '結果');
	        }
	        
	    });
	}
	
	$('[id$=page]').click(function() {
		if(document.URL.match(/..member/)) {
			$("#editlist").load($(this).attr('href'));
		} else {
			$("#list").load($(this).attr('href'));
		}
		return false;
	});
	
	$('*[id^=sort_status]').click(function() {
		var idx = $(this).attr("id").replace("sort_status", "");
		var module = $(this).closest("div").attr('id');
		
		switch ($(this).attr("name")) {
			case 'unsort':
				$('[id^=status]').attr('name', "unsort");
				$('[id^=status]').attr('src', '../themes/images/unsorted.png');
				$(this).attr('name', "down");
				$('#status'+idx).attr('src', '../themes/images/down.png');
				
				sendrequest($(this).attr('class'), 'DESC', module);
				break;
			
			case 'down':
				$('[id^=status]').attr('name', "unsort");
				$('[id^=status]').attr('src', '../themes/images/unsorted.png');
				$(this).attr('name', "up");
				$('#status'+idx).attr('src', '../themes/images/up.png');
				
				sendrequest($(this).attr('class'), 'ASC', module);
				break;
				
			case 'up':
				$('[id^=status]').attr('name', "unsort");
				$('[id^=status]').attr('src', '../themes/images/unsorted.png');
				$(this).attr('name', "down");
				$('#status'+idx).attr('src', '../themes/images/down.png');
				
				sendrequest($(this).attr('class'), 'DESC', module);
				break;
				
			default:
				$(this).attr('name', "unsort");
				$('#status'+idx).attr('src', '../themes/images/unsorted.png');
				break;
		}
	});
	
	$(".delete").click(function() {
        var id = $(this).parent('td').attr('id');
        delrev_check('削除', 'player', 'delete', id);
    });
	
    $(".revert").click(function() {
        var id = $(this).parent('td').attr('id');
        delrev_check('復元', 'player', 'revert', id);
    });

	$(".mijissou").click(function(){
		jAlert('未実装なのです', '残念');
	});
	
	$("a#player-data").click(function(){
		submit_action('playeredit', {'id': $(this).attr('name')}, 'gatdata');
		$('#player-edit').modal();
	});
	
	function member_check(){
		for(var j=9;j<=16;j++)
		if ($('*[name=player_name'+j+']').val() != '') {
			if ($('*[name=rate'+j+']').val() == '') {
				var number = j - 8;
			    alert('プレイヤー'+number+'が空白です。');
			    return false;
			}
			console.log($('*[name=player_name'+j+']').val());
		}
		return true;
	}
	
	function sendrequest(sortkey, order, module){
		var $form = $('#search');
		var $sortkey = { name: 'sortkey', value: sortkey};
		var $order = { name: 'order', value: order};
	    var data = $form.serializeArray();
	    
	    data.push($sortkey);
	    data.push($order);
	    
		submit_action(module, data, 'refresh');
	}
	
	function getNowDateTime(date){
		year = date.getFullYear();
		month = date.getMonth()+1;
		day = date.getDate();
		hour = date.getHours();
		min = date.getMinutes();
		sec = date.getSeconds();
		ret_time = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
		
		return ret_time;
	}
	
	function time_check(time){
		var ret = false;
		var now = Date.parse(new Date());
		check_time = time.setMinutes(time.getMinutes() + 10);
		
		if (now >= check_time){
			ret = true;
		} else {
			jAlert('試合時間が10分未満です。<br />10分経過を待つか、ゲームのキャンセルもしくは管理画面よりゲームを終了して下さい。', '警告');
			ret = false;
		}
		return ret;
	}
	
});