(function() {
  var video = document.getElementById('video'),
   canvas = document.getElementById('canvas'),
   context = canvas.getContext('2d'),
   photo = document.getElementById('photo'),
   vendorUrl = window.URL || window.webkitURL;
  navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
mozGetUserMedia || navigator.msGetUserMedia;
  
   navigator.getMedia({
   video: true,
   audio: false
  }, function(stream) //если использование камеры разрешено 
  {
   video.src = vendorUrl.createObjectURL(stream);
   video.play();
  }, function(error) //если использование камеры запрещено
  {
   alert('Ошибка! Что-то пошло не так, попробуйте позже.');
  });
   //получаем id элемента и вызываем функцию, кликом на кнопку 
  document.getElementById('capture').addEventListener('click', function() {
   //отрисовка текущего кадра видео
   context.drawImage(video, 0, 0, 400, 300);
   photo.setAttribute('src', canvas.toDataURL('image/png'));
  });
})();

//функция изменения полей
$(".info").on("click",( function()
{
    
    $(this).after('<input type="text" blur="blur()" id="info' + this.id + '" value="' +  this.innerHTML+ '" >')
	this.innerHTML = "";
	$("#info" + this.id).focus();
    var elemId = this.id;

	$("#info" + this.id).blur(function()
	{
	var newData = $(this).val();
	$(this).unbind("blur")
	$(this).remove();
	$("#" + elemId).html(newData);
	})
	}
	)
);


//рисуем подпись
(function() {
	$(function() {
		$("#sign").click(function () {
			var modal = openModal(133);
			$(modal).html('<canvas id="canvas" width="320" height="100"></canvas>\
										<br>\
										<input id="button" type="button" value="Сохранить" />');
			$("#canvas").css("position", "relative").css("border-bottom", "1px solid #000");

			var canvas = document.getElementById("canvas");
			var context = canvas.getContext('2d');

			$("#canvas").mousedown(function(e) {
				var coordX = e.offsetX == undefined ? e.layerX : e.offsetX;
				var coordY = e.offsetY == undefined ? e.layerY : e.offsetY;

				context.beginPath();
				context.moveTo(coordX, coordY);

				$("#canvas").mousemove(function(e) {
					coordX = e.offsetX == undefined ? e.layerX : e.offsetX;
					coordY = e.offsetY == undefined ? e.layerY : e.offsetY;

					context.lineTo(coordX, coordY);

					context.strokeStyle = "#000";
					context.stroke();
				});
				$("#canvas").mouseup(function(e) {
					coordX = e.offsetX == undefined ? e.layerX : e.offsetX;
					coordY = e.offsetY == undefined ? e.layerY : e.offsetY;

					context.lineTo(coordX, coordY);
					
					context.strokeStyle = "#000";
					context.stroke();
					
					context.closePath();
					
					$("#canvas").unbind("mousemove");
					$("#canvas").unbind("mouseup");
				});
			});

			$("#button").click(function() {
				$("#sign").html("<img>");
				$("#sign img").attr("src", canvas.toDataURL('image/png')).css("width", "100px");
				closeModal();
			});
		});
		});
		})();
		
		function openModal(height) {
		$("body").prepend('<div id="place"></div><div id="modal"></div>');
		$("#place").click(function() {
			closeModal();
		});
		return $("#modal").css("height", height == undefined ? "300px" : height + "px");
	}
	function closeModal() {
			$("#place, #modal").remove();
	}
		
		