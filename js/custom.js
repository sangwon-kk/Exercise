(function ($) {
	"use strict"; // 엄격 모드 활성화 - 오류를 방지하고 안전한 코드를 작성하도록 돕습니다.

	// 문서 로드 시 탭 기능 초기화
	$(function () {
		$("#tabs").tabs(); // jQuery UI 탭을 활성화하여 특정 요소에 탭 기능을 추가합니다.
	});

	// 스크롤 이벤트 - 헤더의 배경을 변경
	$(window).scroll(function () {
		var scroll = $(window).scrollTop(); // 현재 스크롤 위치를 가져옵니다.
		var box = $('.header-text').height(); // '.header-text' 요소의 높이를 가져옵니다.
		var header = $('header').height(); // 'header' 요소의 높이를 가져옵니다.

		// 스크롤 위치에 따라 헤더에 배경 클래스를 추가하거나 제거합니다.
		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// 폼 제출 처리 - AJAX를 사용하여 비동기 폼 전송
	var frm = $('#contact'); // 폼 요소를 가져옵니다.
	var mes = $('#messages'); // 메시지 표시 영역을 가져옵니다.

	frm.submit(function (e) {
		e.preventDefault(); // 기본 폼 제출 방식을 막고 AJAX를 통해 전송합니다.

		$.ajax({
			type: frm.attr('method'), // 폼의 전송 방법(GET, POST 등)을 가져옵니다.
			url: frm.attr('action'), // 폼의 전송 URL을 가져옵니다.
			data: frm.serialize(), // 폼 데이터를 직렬화하여 전송합니다.
			success: function (data) {
				mes.show(); // 메시지 영역을 표시합니다.
				mes.text('Message sent'); // 성공 메시지를 표시합니다.
			},
			error: function (data) {
				mes.show(); // 메시지 영역을 표시합니다.
				mes.text('Error'); // 에러 메시지를 표시합니다.
			},
		});
	});

	// 스케줄 필터링 기능 - 클릭 시 필터 적용
	$('.schedule-filter li').on('click', function () {
		var tsfilter = $(this).data('tsfilter'); // 클릭된 요소의 필터 값을 가져옵니다.
		$('.schedule-filter li').removeClass('active'); // 모든 필터에서 'active' 클래스를 제거합니다.
		$(this).addClass('active'); // 클릭된 필터에 'active' 클래스를 추가합니다.

		if (tsfilter == 'all') {
			$('.schedule-table').removeClass('filtering'); // 모든 필터링 해제
			$('.ts-item').removeClass('show'); // 모든 항목 표시
		} else {
			$('.schedule-table').addClass('filtering'); // 필터링 클래스 추가
		}

		// 각 항목을 순회하며 필터링된 항목만 표시
		$('.ts-item').each(function () {
			$(this).removeClass('show');
			if ($(this).data('tsmeta') == tsfilter) {
				$(this).addClass('show'); // 필터와 일치하는 항목을 표시
			}
		});
	});

	// 초기 모바일 네비게이션 설정 호출
	mobileNav();

	// 스크롤 애니메이션 초기화 (scrollReveal 라이브러리 사용)
	window.sr = new scrollReveal();

	// 메뉴 드롭다운 토글 - 모바일 메뉴에서 사용
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active'); // 메뉴 트리거에 'active' 클래스를 토글
			$('.header-area .nav').slideToggle(200); // 네비게이션 메뉴를 슬라이드하여 토글
		});
	}

	// 문서 로드 후 스크롤 이벤트와 부드러운 스크롤 설정
	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		// 부드러운 스크롤링 - 페이지 내 링크 클릭 시 스크롤 이동
		$('.scroll-to-section a[href^="#"]').on('click', function (e) {
			e.preventDefault(); // 기본 링크 이동 동작을 막습니다.
			$(document).off("scroll"); // 스크롤 이벤트를 일시적으로 해제합니다.
			$('.header-area .nav').hide(200); // 네비게이션 메뉴를 숨깁니다.

			$('a').each(function () {
				$(this).removeClass('active'); // 모든 링크에서 'active' 클래스 제거
			});
			$(this).addClass('active'); // 클릭된 링크에 'active' 클래스 추가

			var target = $(this.hash); // 클릭된 링크의 목표 위치를 가져옵니다.
			$('html, body').stop().animate({
				scrollTop: (target.offset().top) + 1 // 부드럽게 스크롤 이동
			}, 500, 'swing', function () {
				window.location.hash = target.selector; // URL에 해시 추가
				$(document).on("scroll", onScroll); // 스크롤 이벤트 다시 활성화
			});
		});
	});

	// 스크롤 이벤트 핸들러 - 현재 스크롤 위치를 가져옵니다.
	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
	}

	// 페이지 로딩 애니메이션 - 페이지 로드 완료 시 호출
	$(window).on('load', function () {
		$('#js-preloader').addClass('loaded'); // 로딩 애니메이션을 마친 후 클래스 추가
	});

	// 창 크기 조정 시 모바일 메뉴 수정
	$(window).on('resize', function () {
		mobileNav(); // 모바일 네비게이션 동작을 업데이트합니다.
	});

	// 모바일 메뉴 설정 함수 - 화면 크기에 따라 서브메뉴 동작 설정
	function mobileNav() {
		var width = $(window).width(); // 현재 창의 너비를 가져옵니다.
		$('.submenu').on('click', function () {
			if (width < 767) { // 화면 너비가 767px 미만일 때
				$('.submenu ul').removeClass('active'); // 모든 서브메뉴에서 'active' 제거
				$(this).find('ul').toggleClass('active'); // 클릭된 서브메뉴를 토글
			}
		});
	}

})(window.jQuery);
