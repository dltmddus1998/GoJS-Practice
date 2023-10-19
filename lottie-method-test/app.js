(function () {
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './global-delivery.json',
  });

  document.getElementById('moveLayerButton').addEventListener('click', () => {
    fetch('./global-delivery.json')
      .then((response) => response.json())
      .then((json) => {
        json['layers'][0]['ks']['s']['k'] = [50, 50, 100];
        json['layers'][0]['ks']['a']['k'] = [100, 100, 0];

        lottie.destroy();

        lottie.loadAnimation({
          container: document.getElementById('lottie-animation'), // 애니메이션을 보여줄 div 요소
          renderer: 'svg', // 렌더링 방식 (canvas 또는 svg)
          loop: true, // 애니메이션을 반복할지 여부
          autoplay: true, // 자동 재생할지 여부
          animationData: json,
        });
      });
  });

  document.getElementById('moveLayerBackButton').addEventListener('click', () => {
    lottie.destroy();

    lottie.loadAnimation({
      container: document.getElementById('lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: './global-delivery.json',
    });
  });

  document.getElementById('createNewButton').addEventListener('click', () => {
    const animation = bodymovin.loadAnimation({
      container: document.getElementById('lottie-animation-re'),
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: './global-delivery.json',
    });

    animation.goToAndPlay(10, true);
  });

  document.getElementById('lottie-animation-re').addEventListener('click', () => {});
})();
