	function resizes(){
		if ($('.lSide').width() > 200) {
			var headr = $('.rSide .head').height();
			$('.rSide').css({
				"width" : "calc(100% - 100px)"
			},100)
			$('.lSide').css({
				"width" : "100px"
			},300)
			$('.lSide .head').animate({
				height : $('.rSide .head').height() +"px"
			})


			// cursor
			$('.arrow:nth-child(1)').css({
				"-webkit-transform" : "rotate(35deg)",
				"-moz-transform" : "rotate(35deg)",
				"transform" : "rotate(35deg)"
			})
			$('.arrow:nth-child(2)').css({
				"-webkit-transform" : "rotate(-35deg)",
				"-moz-transform" : "rotate(-35deg)",
				"transform" : "rotate(-35deg)"
			})

			// menu
			$('.menu li img').animate({
				width : "80%",
				margin : "auto 10%"
			})
			$('.lSide img.logo').css({
				"position" : "absolute",
				"top" : "0",
				"bottom" : "0",
				"width" : "80%"
			})
			$('.menu li').css({"padding" : "5px 0" , "text-align" : "center"})
			$('.menu li a').css({"text-align" : "center" , "font-size" : "12px"})

			// submenu			
			$('.submenu').css({
				"position" : "absolute",
				"right" : "-200px",
				"width" : "200px",
				"margin-top" : "-50px",
				"border" : "1px solid #DFE8F1"
			})
		}else if($('.lSide').width() < 200){
			var headr = $('.rSide .head').height()

			$('.menu li img').animate({ // ukuran image berubah lebih dulu dibanding ukuran lSide
				width : "25px",
				margin : "auto 10px auto 0"
			})
			$('.rSide').css({
				"width" : "85%"
			},400)
			$('.lSide').css({
				"width" : "15%"
			},500)
			$('.lSide .head').animate({
				height : $('.rSide .head').height() +"px"
			})

			$('.lSide img.logo').css({
				"position" : "relative",
				"top" : "0",
				"bottom" : "0",
				"width" : "50%"
			})

			// cursor
			$('.arrow:nth-child(1)').css({
				"-webkit-transform" : "rotate(-35deg)",
				"-moz-transform" : "rotate(-35deg)",
				"transform" : "rotate(-35deg)"
			})
			$('.arrow:nth-child(2)').css({
				"-webkit-transform" : "rotate(35deg)",
				"-moz-transform" : "rotate(35deg)",
				"transform" : "rotate(35deg)"
			})

			// menu

			$('.menu li').css({"padding" : "5px 20px" , "text-align" : "left"})
			$('.menu li a').css({"text-align" : "center" , "font-size" : "14px"})

			//submenu
			$('.submenu').css({
				"position" : "relative",
				"right" : "0",
				"width" : "auto",
				"margin-top" : "0",
				"border" : "none"
			})
		}
	}