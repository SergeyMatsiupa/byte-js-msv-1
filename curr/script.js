(function() {
    // Get the buttons.
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
    // Остальной код будет тут…

    // Canvas
    var canvas = document.getElementById('stage');
    // 2d контекст отрисовки.
    var ctx = canvas.getContext('2d');
    // Стиль наполнения для контекста отрисовки.
    ctx.fillStyle = '#212121';
    // Переменная в которой будет храниться requestID.
    var requestID;
    // Переменные для отрисовки позиций и объекта.
    var posX = 0;
    var boxWidth = 50;
    var pixelsPerFrame = 5; 
    // Количество пикселей, на которое должен двинуться блок в каждом кадре.
    // Отрисовка изначального блока в canvas.
    ctx.fillRect(posX, 0, boxWidth, canvas.height);

    // Animate.
    function animate() {
        requestID = requestAnimationFrame(animate);// Проверка если блок не достиг конца отрисовки в канвасе.
        // В противном случае завершается анимация.
        if (posX <= (canvas.width - boxWidth)) {
            ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
            ctx.fillRect(posX, 0, boxWidth, canvas.height);posX += pixelsPerFrame;
        } else {
            cancelAnimationFrame(requestID);
        }
    }

    // EventListener для кнопки старта.
    startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Запуск анимации.
        requestID = requestAnimationFrame(animate);
    });
        // EventListener для кнопки стоп.
    stopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // завершаем анимацию;
        cancelAnimationFrame(requestID);
    });
    // EventListener для кнопки сброса.
    resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Сбрасываем X позицию на ноль.
        posX = 0;
        // Очищаем canvas.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Отрисовываем изначальный блок.
        ctx.fillRect(posX, 0, boxWidth, canvas.height);
    });

    }());