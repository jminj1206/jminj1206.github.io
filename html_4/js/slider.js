$(function () {
	var i = 0

	/*0번째i 이게 배경화면 맞춰놓기*/
	$(".slider_button li").eq(0).css({
		borderTop: "solid 4px #ef544d"
	})

	$(".slider_button li").mouseenter(function () {
		i = $(this).index();
	})


	function slide() {

		i++;
		if (i > $(".slide li:last").index()) {
			i = 0;
		}

		$(".slide li").eq(i).stop().show();
		$(".slide li").eq(i - 1).stop().hide();

		/*슬라이더에 맞게 배경화면 전환*/
		if (i == 0) {
			$("#slider").css({
				"background": "#d6d1cb"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d"
			});

		} else if (i == 1) {
			$("#slider").css({
				"background": "#fffaf2"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d "
			});

		} else if (i == 2) {
			$("#slider").css({
				"background": "#ffdc75"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d "
			});

		} else if (i == 3) {
			$("#slider").css({
				"background": "#fff"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d "
			});

		} else if (i == 4) {
			$("#slider").css({
				"background": "#b5c8f0"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d "
			});
		} else {
			$("#slider").css({
				"background": "#d6d1cb"
			})
			$(".slider_button li").eq(i - 1).css({
				borderTop: "solid 4px #f7f7f7"
			});
			$(".slider_button li").eq(i).css({
				borderTop: "solid 4px #ef544d"
			});
		}


	}



	/*슬라이드키워드에 마우스를 올리면 해당 슬라이더로 넘어감*/
	$(".slider_button ul li").eq(0).mouseenter(function () {
		var i = 0;
		$("#slider").css({
			"background": "#d6d1cb"
		});
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		$(this).css({
			borderTop: "solid 4px #ef544d"
		});
		$(".slide li").stop().hide();
		$(".slide li").eq(0).stop().show();

	});

	$(".slider_button ul li").eq(1).mouseenter(function () {
		$("#slider").css({
			"background": "#fffaf2"
		});
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		$(this).css({
			borderTop: "solid 4px #ef544d"
		});
		$(".slide li").stop().hide();
		$(".slide li").eq(1).stop().show();

	});

	$(".slider_button ul li").eq(2).mouseenter(function () {
		$("#slider").css({
			"background": "#ffdc75"
		});
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		$(this).css({
			borderTop: "solid 4px #ef544d"
		});
		$(".slide li").stop().hide();
		$(".slide li").eq(2).stop().show();

	});

	$(".slider_button ul li").eq(3).mouseenter(function () {
		$("#slider").css({
			"background": "#fff"
		});
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		$(this).css({
			borderTop: "solid 4px #ef544d"
		});
		$(".slide li").stop().hide();
		$(".slide li").eq(3).stop().show();

	});

	$(".slider_button ul li").eq(4).mouseenter(function () {
		$("#slider").css({
			"background": "#b5c8f0"
		});
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		$(this).css({
			borderTop: "solid 4px #ef544d"
		});
		$(".slide li").stop().hide();
		$(".slide li").eq(4).stop().show();

	});

	/*마우스를 올리면 멈춤*/
	var ani = setInterval(slide, 3000)
	$(".slider_button ul li").mouseover(function () {
		clearInterval(ani);
	});

	$(".slider_button ul li").mouseout(function () {
		$(".slider_button ul li").css({
			borderTop: "solid 4px #f7f7f7"
		});
		ani = setInterval(slide, 3000);
	});

})